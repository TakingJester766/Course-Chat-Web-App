import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Dashboard from './pages/Dashboard';
import CourseColumn from './components/CourseColumn';

import { auth, messagesRef, messagesQuery } from './configurations/firebase';

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <SignIn auth={auth} />
  }

  return (
    <div className='App'>
      <div id="course-column">
        <CourseColumn auth={auth} />
      </div>
      <div id="chat-column">
        <ChatRoom auth={auth} messagesRef={messagesRef} messagesQuery={messagesQuery} />
      </div>
    </div>    
  )
}

export default App;
