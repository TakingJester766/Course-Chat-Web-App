import { firebaseConfig } from '../configurations/firebase.js';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, orderBy, limit } from "firebase/firestore";


