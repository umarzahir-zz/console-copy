import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './scenes/Login/Login';
import Signin from './scenes/Signin/Signin';

function App() {
  return (
    <div className="App">
      <Login/>
      <Signin/>
    </div>
  );
}

export default App;
