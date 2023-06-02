import React, { useState, useEffect } from 'react';

import CourseRoute from './CourseRoute';
import getEnrolledCourses from '../utils/getEnrolledCourses.js';


import SignOut from './SignOut';

function CourseColumn(props) {
  const [courses, setCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState(null);

  const { auth, passSelectedCourse } = props; // Destructure passSelectedCourse from props

  useEffect(() => {
    getEnrolledCourses().then(
      (courses) => setCourses(courses),
      (error) => console.error(error)
    );
  }, []);

  const handleButtonClick = (e) => {
    setCourseTitle(e.target.value);
    passSelectedCourse(e.target.value); // This function is now available through props
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
