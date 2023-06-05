import React from 'react';

function CourseRoute(props) {
  const { name, passSelectedCourse, setCourseTitle } = props;

  const handleButtonClick = (e) => {
    setCourseTitle(e.target.value);
    passSelectedCourse(e.target.value); 
  }

  return (
    <div>
      <button id='course-route' value={name} onClick={handleButtonClick}>{name}</button>
    </div>
  )  
}

export default CourseRoute;
