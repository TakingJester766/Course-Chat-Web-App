import React, { useEffect, useState } from 'react';
import getUid from '../utils/getUid';
import getUserInfo from '../utils/getUserInfo';

import { updateDoc } from "firebase/firestore";

function YourProfile() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [major, setMajor] = useState('');

  useEffect(() => {
    getUid().then((uid) => {
      getUserInfo(uid).then(
        (userInfo) => {
          const { query } = userInfo;
          setName(query.name);
          setBio(query.bio);
          setMajor(query.major);
        },
        (error) => console.error(error)
      );
    }, (error) => console.error(error));
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const updateProfile = async (event) => {
    event.preventDefault();
    const uid = await getUid();
    const userInfo = await getUserInfo(uid);
    const { ref: userInfoRef } = userInfo;
    await updateDoc(userInfoRef, {
      name: name,
      bio: bio,
      major: major
    });
  };
  

  return (
    <div id="profile-container">
      <form id="profile-details">
        <h1>Your Profile</h1>
        <p>Display Name</p>
        <input
          className="profile-item"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />

        <p>About you</p>
        <input
          className="profile-item"
          type="text"
          placeholder="Your bio"
          value={bio}
          onChange={handleBioChange}
        />

        <p>Your major</p>
        <input
          className="profile-item"
          type="text"
          placeholder="Your major"
          value={major}
          onChange={handleMajorChange}
        />
        <button onClick={updateProfile} id="profile-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default YourProfile;
