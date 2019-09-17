import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.setItem('token', "");
  }

  return (
    <div>
      <h1>Friends</h1>
      {token ? <NavLink to="/" onClick={handleLogout}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>} 
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to ="/add">Add Friend</NavLink>
    </div>
  )
}

export default NavBar;