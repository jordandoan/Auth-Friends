import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const Friends = () => {
  let [friends, setFriends] = useState();

  useEffect(() => {
    const URL = "http://localhost:5000/api/friends";
    axiosWithAuth().get(URL)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      Friends page
      {!friends && <p>Loading...</p>}
      {friends && friends.map(friend => (
        <div key={friend.id}>
          <p>{friend.name}</p>
          <p>{friend.age} years old</p>
          <p>Contact: {friend.email}</p>
        </div>
      ))}
      </div>

  )
}

export default Friends;