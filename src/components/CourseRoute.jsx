import React, { useState, useEffect } from 'react'
import getUid from '../utils/getUid';
import getEnrolledCourses from '../utils/getEnrolledCourses';

function CourseRoute(props) {
  //const [uid, setUid] = useState(null);

  const { name } = props;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )  
}

export default CourseRoute;

//{courses.length > 0 && courses[0].name && <h1>{courses[0].name}</h1>}

