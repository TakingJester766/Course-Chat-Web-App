import React from 'react'

import CourseRoute from './CourseRoute';

import SignOut from './SignOut';

function CourseColumn(props) {

  const { auth  } = props;

  return (
    <div className="course-column-container">
        <h1>Course Column</h1>
        <CourseRoute />
        <SignOut auth={auth} />
        
    </div>
  )
}

export default CourseColumn;  
