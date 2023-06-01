import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { auth, firestore } from '../configurations/firebase.js';

const { uid } = auth.currentUser;

const userDocRef = collection(firestore, 'users').doc(uid);



