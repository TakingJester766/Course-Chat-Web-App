import React, { useState, useEffect } from 'react';

import CourseRoute from './CourseRoute';
import getEnrolledCourses from '../utils/getEnrolledCourses.js';


import SignOut from './SignOut';

function CourseColumn(props, { passSelectedCourse }) {
  const [courses, setCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState(null);

  const { auth } = props;

  useEffect(() => {
    getEnrolledCourses().then(
      (courses) => setCourses(courses),
      (error) => console.error(error)
    );
  }, []);

  //to send course selected to App.jsx

  //const [showChatRoom, setShowChatRoom] = useState(false);

  const handleButtonClick = (e) => {
    //setShowChatRoom(true);
    setCourseTitle(e.target.value);
    passSelectedCourse(e.target.value);
  }

 

  return (
    <div id="course-column-container">
      <h1>Course Column</h1>

    <div id='course-route-container'>
      {courses && courses.map((course, index) => (
        <CourseRoute key={index} name={course.name} />
      ))}
    </div>

    <div>
      <button value="CS220" onClick={handleButtonClick}>CS220</button>
      <button value="CS187" onClick={handleButtonClick}>CS187</button>
    </div>
      
      <SignOut auth={auth} />
    </div>
  );
}

export default CourseColumn;
