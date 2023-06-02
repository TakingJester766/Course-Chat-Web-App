import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';
import getUid from './getUid.js';
import getEnrolledCourses from "./getEnrolledCourses.js";

const getCourseMessages= async (courseName) => {
    
    const courseData = {
        ref: collection(firestore, 'course-messages-sample', courseName, messages), //for addDoc in CourseChatRoom.jsx
        query: await getDocs(collection(firestore, 'course-messages-sample', courseName, messages), orderBy('createdAt'), limit(100)) //for fetching chat history
    }

}

export default getCourseMessages;
