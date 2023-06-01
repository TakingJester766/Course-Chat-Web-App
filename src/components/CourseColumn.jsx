import React from 'react'

import CourseRoute from './CourseRoute';

import SignOut from './SignOut';

function CourseColumn({ auth }) {
  return (
    <div className="course-column-container">
        <h1>Course Column</h1>
        <SignOut auth={auth} />
        
    </div>
  )
}

export default CourseColumn;  
