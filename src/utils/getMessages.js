import { collection, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../configurations/firebase.js';

const messagesRef = collection(firestore, 'messages');
const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(100));

export { messagesRef, messagesQuery };
