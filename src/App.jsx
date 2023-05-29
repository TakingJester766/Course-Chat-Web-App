// App.jsx

import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import { auth, messagesRef, messagesQuery } from './configurations/firebase';

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

export default App;
