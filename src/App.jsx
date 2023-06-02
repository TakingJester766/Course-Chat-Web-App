import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Dashboard from './pages/Dashboard';
import CourseColumn from './components/CourseColumn';
import { messagesRef, messagesQuery } from './utils/getMessages';
import Spinner from './components/Spinner';

//import auth ONLY from firebase.js
import { auth } from './configurations/firebase.js';

function App() {
  const [user, loading] = useAuthState(auth);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSignIn = () => {
    setShowSpinner(true);
    // Perform your login process here

    // Once login is complete, you can hide the spinner
    setShowSpinner(false);
  };

  if (loading) {
    // Show the spinner while loading
    return <Spinner />;
  }

  if (!user) {
    return <SignIn auth={auth} onSignIn={handleSignIn} />;
  }

  return (
    <div className='App'>
      <div id="course-column">
        <CourseColumn auth={auth} />
      </div>
      <div id="chat-column">
        {showSpinner ? <Spinner /> : <ChatRoom auth={auth} messagesRef={messagesRef} messagesQuery={messagesQuery} />}
      </div>
    </div>    
  );
}

export default App;
