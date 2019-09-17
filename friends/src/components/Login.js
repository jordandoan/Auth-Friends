import React, { useState } from 'react';
import {axiosWithAuth} from './axiosWithAuth';
import { baseURL } from './url';

const Login = (props) => {
  let [isLogging, setLogging] = useState(false)
  let [credentials, setCreds] = useState({username: '', password: ''});

  const handleChange = (event) => {
    setCreds({...credentials, [event["target"]["name"]]: event["target"]["value"]} )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogging(true)
    axiosWithAuth().post(baseURL + 'login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        setLogging(false)
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div>
      {isLogging && <img className="spinner" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c215736197347.57135ca123427.gif"/>}
      {!isLogging && 
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input type="text"
                    name="username"
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
            />
            Lambda School
          </div>
          <div>
            <input type="password"
                    name="password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
            />
            i&lt;3Lambd4
          </div>
          <button>
            Log in 
          </button>
        </form>
      }
    </div>
  )
}

export default Login;