import { GuestbookMessages } from 'components/GuestbookMessages';
import React, { useEffect, useState } from 'react'
import { TopHeader } from '../components/TopHeader'

const URL = 'http://localhost:8080/users'

export const MemberPage = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  const userId = window.localStorage.getItem('userId');
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`${URL}/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.json());
        }
      })
      .then((users) => {
        setUser(users)
        setAuthorized(true)
      })
      .catch((err) => {
        console.log('ERROR:', err);
      })
  }, [userId, accessToken]);

  const handleLogOut = () => {
    window.location.href = '/';
    window.localStorage.clear()
  };

  return (
    <div>
       <TopHeader />
      {authorized && (
        <section>
          <h1>Welcome {user.name}</h1>
          <h2>You are now logged in and can use the guestbook</h2>
          <div>
            <button type="submit" onClick={handleLogOut}>Log Out</button>
          </div>
          <div>
            <GuestbookMessages user={user.name} />
          </div>
        </section>

      )}
    </div>
  )
}