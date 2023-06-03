import React, { useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { addDoc, serverTimestamp } from "firebase/firestore";
import ChatMessage from './ChatMessage';

import getCourseMessages from '../utils/getCourseMessages.js'; 

function CourseChatRoom({ auth, selectedCourse }) {
  const [formValue, setFormValue] = useState('');
  const courseData = getCourseMessages(selectedCourse);
  const messagesRef = courseData.msgRef;
  const [messages] = useCollectionData(courseData.msgQuery, { idField: 'id' });

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);
  
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
      <h1>{selectedCourse}</h1>
      <div className="message-container">
        {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} auth={auth} />)}
        <div ref={messagesEndRef} />
      </div>
      <div id='input-field'>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message CS187" />
          <button type="submit" disabled={!formValue}><i className="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}

export default CourseChatRoom;
