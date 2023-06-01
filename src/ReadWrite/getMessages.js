import { collection, query, orderBy, limit } from "firebase/firestore";
import { auth, firestore } from '../configurations/firebase.js';

const messagesRef = collection(firestore, 'messages');
const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));

export { auth, messagesRef, messagesQuery };
