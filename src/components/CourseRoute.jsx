import React, { useState, useEffect } from 'react'
import getUid from '../utils/getUid';

function CourseRoute(props) {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    getUid().then(
      uid => setUid(uid),
      error => console.error(error)
    );
  }, []);

  return (
    <div>
      <h1>CourseRoute</h1>
      <div>
        {uid && <h1>{uid}</h1>}
      </div>
    </div>
  )
}

export default CourseRoute;
