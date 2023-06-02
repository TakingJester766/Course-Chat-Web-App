import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';
import { getAuth } from "firebase/auth";

//const { uid } = auth.currentUser;

const auth = getAuth();

const sfRef = firestore.collection('users').doc();
const collections = await sfRef.listCollections();
collections.forEach(collection => {
  console.log('Found subcollection with id:', collection.id);
});



/*
WORKS TO GET USERS

const querySnapshot = await getDocs(collection(firestore, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

*/