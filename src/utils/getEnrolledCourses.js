import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';
import getUid from './getUid.js';

//users collection, then uid document, then courses subcollection. make this an async function
const getEnrolledCourses = async () => {
  const uid = await getUid();
  const queryGetEnrolled = await getDocs(collection(firestore, 'users', uid, 'courses'));
  const enrolledCourses = [];
  queryGetEnrolled.forEach((doc) => {
    enrolledCourses.push(doc.data());
  }
  ); 
  return enrolledCourses;
}


export default getEnrolledCourses;