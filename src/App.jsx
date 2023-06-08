import './App.css';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import CourseColumn from './components/CourseColumn';
import { messagesRef, messagesQuery } from './utils/getMessages';
import Spinner from './components/Spinner';
import CourseChatRoom from './components/CourseChatRoom';
import getEnrolledCourses from './utils/getEnrolledCourses.js';
import YourProfile from './components/YourProfile';
import AddCourse from './components/AddCourse';

//import auth ONLY from firebase.js
import { auth } from './configurations/firebase.js';

function App() {
  const [user, loading] = useAuthState(auth);
  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);

  useEffect(() => {
    getEnrolledCourses().then(
      (courses) => setSelectedCourse(courses[0]),
      (error) => console.error(error)
    );
  }, []);

  const handleSignIn = () => {
    setShowSpinner(true);
    setShowSpinner(false);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <SignIn auth={auth} onSignIn={handleSignIn} />;
  }

  const handleSelectedCourse = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setShowProfile(false);
    setShowAddCourse(false);
  };

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowAddCourse(false);
    setSelectedCourse(null); // Added this line
  };

  const handleShowAddCourse = () => {
    setShowProfile(false);
    setShowAddCourse(true);
    setSelectedCourse(null); // Added this line
  };

  return (
    <div className='App'>
      <div id="course-column">
        <CourseColumn auth={auth} passSelectedCourse={handleSelectedCourse} setShowProfile={handleShowProfile} setShowAddCourse={handleShowAddCourse}/>
      </div>
      <div id="chat-column">
        {showProfile ? <YourProfile /> : showAddCourse ? <AddCourse /> : selectedCourse && <CourseChatRoom auth={auth} selectedCourse={selectedCourse} />}
      </div>
    </div> 
  );
}

export default App;
