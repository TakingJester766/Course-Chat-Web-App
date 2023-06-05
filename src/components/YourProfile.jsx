import React, { useEffect, useState } from 'react'
import getUid from '../utils/getUid'
import getUserInfo from '../utils/getUserInfo'

function YourProfile() {

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        getUid().then(
            (uid) => {
                getUserInfo(uid).then(
                    (userInfo) => setUserInfo(userInfo),
                    (error) => console.error(error)
                )
            },
            (error) => console.error(error)
        )
    }, [])


    return (
        <div>
            <h1>Your Profile</h1>
            <p>{userInfo.name}</p>
            <p>{userInfo.bio}</p>
            <p>{userInfo.major}</p>

        </div>
    )
}

export default YourProfile