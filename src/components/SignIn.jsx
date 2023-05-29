// SignIn.jsx
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn({ auth }) {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

export default SignIn;
