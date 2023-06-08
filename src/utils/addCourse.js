import { doc, getDoc, addDoc } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';
import getUid from './getUid.js';

const addCourse = async (courseName, section) => {
    const uid = await getUid();
    const userDocRef = doc(firestore, 'users', uid, 'courses');
    await addDoc(userDocRef, {
        name: courseName,
        section: section
    });
}

export default addCourse;