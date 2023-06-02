import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';
import getUid from './getUid.js';
import getEnrolledCourses from "./getEnrolledCourses.js";

const getCourseMessages = async () => {
    const courseMessagesRef = await getDocs(collection(firestore, 'course-messages-sample', 'COMP SCI 230', 'messages'));
    const courseMessages = [];
    courseMessagesRef.forEach((doc) => {
        courseMessages.push(doc.data());
    }
    );
    
    return courseMessages;
}

//getCourseMessages().then(result => console.log(result));


export default getCourseMessages;
