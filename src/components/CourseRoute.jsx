import React from 'react'

import { useCollectionData } from 'react-firebase-hooks/firestore';



function CourseRoute(props) {

  const [courses] = useCollectionData(coursesQuery, { idField: 'id' });

  const { coursesRef, coursesQuery } = props.users;
  const { auth } = props;

  //map through courses
  //for each course, create an <h1> tag with the course name
  //for each course, create a <div> tag with the course description


  return (
    <div>
      <h1>CourseRoute</h1>
      <div>
        {courses && courses.map((course, index) => <h1 key={index}>{course.name}</h1>)}
      </div>

    

    
    
    </div>
  )
}

export default CourseRoute