import React from 'react'

import SignOut from './SignOut';

import { useCollectionData } from 'react-firebase-hooks/firestore';

function CourseColumn({ auth }) {
  return (
    <div className="course-column-container">
        <h1>Course Column</h1>
        <SignOut auth={auth} />
    </div>
  )
}

export default CourseColumn;  
