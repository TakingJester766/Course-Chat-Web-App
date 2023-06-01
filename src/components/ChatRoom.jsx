// ChatRoom.jsx
import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { addDoc, serverTimestamp } from "firebase/firestore";
import ChatMessage from './ChatMessage';

function ChatRoom({ auth, messagesRef, messagesQuery }) {
  const [formValue, setFormValue] = useState('');
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();
    
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
  }

  return (
    <div className="chatroom-container">
      <div className="message-container">
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} auth={auth} />)}
      </div>
      <div>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message CS187" />
          <button type="submit" disabled={!formValue}><i className="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}

export default ChatRoom;
