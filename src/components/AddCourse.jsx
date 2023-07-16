import React from 'react'
import { useState, useEffect } from 'react';

import getAllCourses from '../utils/getAllCourses.js';

function AddCourse() {

    const [selctedCourse, setSelctedCourse] = useState();

    /*useEffect(() => {
        getAllCourses().then(
            (courses) => {
                setCourses(courses);
                console.log(courses[0].courseName);
            },
            (error) => console.error(error)
        );
    }, []);*/


    return (
        <div id='add-course-container'>
            <h1>Add a Course</h1>

            <button onClick={getAllCourses}>Get All Courses</button>


        </div>
  )
}

export default AddCourse