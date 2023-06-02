import './App.css';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import CourseColumn from './components/CourseColumn';
import { messagesRef, messagesQuery } from './utils/getMessages';
import Spinner from './components/Spinner';
import CourseChatRoom from './components/CourseChatRoom';

//import auth ONLY from firebase.js
import { auth } from './configurations/firebase.js';

function App() {
  
  const [user, loading] = useAuthState(auth);
  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  // Stuff for selected course chatroom

  const handleSelectedCourse = (courseTitle) => {
    setSelectedCourse(courseTitle);
  }

  return (
    <div className='App'>
      <div id="course-column">
        <CourseColumn auth={auth} />
      </div>
      <div id="chat-column">
        {showSpinner ? <Spinner /> : <CourseChatRoom auth={auth} messagesRef={messagesRef} messagesQuery={messagesQuery} passSelectedCourse={handleSelectedCourse} />}
      </div>
    </div>    
  );
}

export default App;
