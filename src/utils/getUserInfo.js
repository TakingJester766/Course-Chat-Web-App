import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';


const getUserInfo = async (uid) => {
    const userDocRef = doc(firestore, 'users', uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      return userDocSnapshot.data();
    } else {
      throw new Error('No such user!');
    }
}

export default getUserInfo;
