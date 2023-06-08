import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';

const getAllCourses = async () => {
    const courses = [];
    const querySnapshot = await getDocs(collection(firestore, "courses"));

    //iterate through and push into an array
    querySnapshot.forEach((doc) => {
        // Access data of the document with doc.data()
        return courses.push(doc.data());
    });

    return courses;
}

export default getAllCourses;
