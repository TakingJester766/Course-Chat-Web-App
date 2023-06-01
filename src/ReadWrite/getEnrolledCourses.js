import { collection, query, orderBy, limit } from "firebase/firestore";
import { auth, firestore } from '../configurations/firebase.js';

const { uid } = auth.currentUser;

const userDocRef = collection(firestore, 'users').doc(uid);

//there is a subcollection of courses in the user document, called "courses"
const coursesRef = collection(userDocRef, 'courses');
const coursesQuery = query(coursesRef, orderBy('__name__'));

export { auth, userDocRef, coursesRef, coursesQuery };