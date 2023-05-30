// App.jsx

import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Dashboard from './pages/Dashboard';

import { auth, messagesRef, messagesQuery } from './configurations/firebase';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <div id="course-column">
        <h1>CS187</h1>
        <h2>Chat Room</h2>
      </div>
      <div id="chat-column">
        <ChatRoom auth={auth} messagesRef={messagesRef} messagesQuery={messagesQuery} />
      </div>
    </div>    
  )
}

export default App;


/*

<section>

 <Route path="/" element={user ? <ChatRoom auth={auth} messagesRef={messagesRef} messagesQuery={messagesQuery} /> : <SignIn auth={auth}/>} />
 <Route path="/signout" element={<SignOut auth={auth} />} />

</section>


*/