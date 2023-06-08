import React from 'react'
import { useState, useEffect } from 'react';

import getAllCourses from '../utils/getAllCourses.js';

function AddCourse() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllCourses().then(
            (courses) => {
                setCourses(courses);
                console.log(courses[0].courseName);
            },
            (error) => console.error(error)
        );
    }, []);


    return (
        <div id='add-course-container'>
            <h1>Add a Course</h1>

            


        </div>
  )
}

export default AddCourse