import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h1>Friends</h1>
      <NavLink to ="/login">Login</NavLink>
    </div>
  )
}

export default NavBar;