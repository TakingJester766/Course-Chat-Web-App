import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../configurations/firebase.js";

const getUid = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Unsubscribe to prevent further updates
      if (user) {
        // User is signed in
        const uid = user.uid;
        resolve(uid);
      } else {
        reject(new Error("No user is signed in."));
      }
    });
  });
};

export default getUid;
