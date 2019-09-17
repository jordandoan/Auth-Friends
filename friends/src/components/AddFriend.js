import React, { useState } from 'react';
import {axiosWithAuth} from './axiosWithAuth';
const AddFriend = (props) => {
  let [isAdding, setAdding] = useState(false)
  let [friend, setFriend] = useState({name: '', age: '', email:""});

  const handleChange = (event) => {
    setFriend({...friend, [event["target"]["name"]]: event["target"]["value"]} )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setAdding(true)
    const URL = "http://localhost:5000/api/friends"
    axiosWithAuth().post(URL, friend)
      .then(res => {
        setAdding(false)
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div>
      {isAdding && <img className="spinner" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c215736197347.57135ca123427.gif"/>}
      {!isAdding && 
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            Name
            <input type="text"
                    name="name"
                    value={friend.username}
                    onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            Age
            <input type="text"
                    name="age"
                    value={friend.age}
                    onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            Email
            <input type="text"
                    name="email"
                    value={friend.email}
                    onChange={(e) => handleChange(e)}
            />
          </div>
          <button>
            Add
          </button>
        </form>
      }
    </div>
  )
}

export default AddFriend;