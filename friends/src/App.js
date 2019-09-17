import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friends" component={Friends} />
      <PrivateRoute path="/add" component={AddFriend} />
    </div>
  );
}

export default App;
