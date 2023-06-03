import React, { useState, useEffect } from 'react';

import CourseRoute from './CourseRoute';
import getEnrolledCourses from '../utils/getEnrolledCourses.js';
import SignOut from './SignOut';

function CourseColumn(props) {
  const [courses, setCourses] = useState([]);
  const [courseTitle, setCourseTitle] = useState('');

  const { auth, passSelectedCourse } = props; 

  useEffect(() => {
    getEnrolledCourses().then(
      (courses) => {
        setCourses(courses);
        if (courses.length > 0) {
          passSelectedCourse(courses[0].name); // Pass first course up to App component
        }
      },
      (error) => console.error(error)
    );
  }, []);
  

  return (
    <div id="course-column-container">
      <h1>Course Column</h1>

      <div id='course-route-container'>
        {courses && courses.map((course, index) => (
          <CourseRoute 
            key={index} 
            name={course.name} 
            passSelectedCourse={passSelectedCourse} 
            setCourseTitle={setCourseTitle}
          />
        ))}
      </div>

      <SignOut auth={auth} />
    </div>
  );
}

export default CourseColumn;
