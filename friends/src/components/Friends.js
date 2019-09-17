import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { baseURL } from './url';

const Friends = (props) => {
  let [friends, setFriends] = useState();

  useEffect(() => {
    axiosWithAuth().get(baseURL+"friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleEdit = (friend) => {
    props.history.push(`/friends/${friend.id}/edit`)
  }

  const handleDelete = (friend) => {
    axiosWithAuth().delete(`${baseURL}friends/${friend.id}`)
      .then(res => setFriends(res.data));
  }

  return (
    <div>
      Friends page
      <div className="friends-container">
      {!friends && <p>Loading...</p>}
      {friends && friends.map(friend => (
        <div className="friend-card" key={friend.id}>
          <p>{friend.name}</p>
          <p>{friend.age} years old</p>
          <p>Contact: {friend.email}</p>
          <button onClick={() => handleEdit(friend)}>Edit Friend</button>
          <button onClick={() => handleDelete(friend)}>Remove Friend</button>
        </div>
      ))}
      </div>
      </div>

  )
}

export default Friends;