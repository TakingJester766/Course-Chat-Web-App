import './App.css'

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import config from '../config.js';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const messagesRef = collection(firestore, 'messages');
const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
       <section>
       {user ? <ChatRoom auth={auth} messagesRef={messagesRef} messagesQuery={messagesQuery} /> : <SignIn auth={auth}/>}
      </section>
    </div>
  )
}


export default App