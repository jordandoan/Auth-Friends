import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
