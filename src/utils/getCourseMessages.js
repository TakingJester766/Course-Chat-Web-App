import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';
import getUid from './getUid.js';
import getEnrolledCourses from "./getEnrolledCourses.js";

const getCourseMessages = (courseName) => {
    const courseMessagesCollection = collection(firestore, 'course-messages-sample', courseName, 'messages');
    const courseMessagesQuery = query(courseMessagesCollection, orderBy('createdAt'), limit(25));
  
    const courseData = {
      msgQuery: courseMessagesQuery,
      msgRef: courseMessagesCollection // Returning collection reference
    };
  
    return courseData;
}
    

//getCourseMessages().then(result => console.log(result));


export default getCourseMessages;
