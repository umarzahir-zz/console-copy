import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store.js";
import Routes from './Routes';

export default class App extends Component {
  render(){
    return (
      <Provider store = { store }>
        <BrowserRouter>
        <div className="App">
        <ul>
                            <li>
                                <Link to="/">Login</Link>
                            </li>
                            <li>
                                <Link to="/signin">Signin</Link>
                            </li>
                        </ul>
          <Routes/>
        </div>
        </BrowserRouter>
        
      </Provider>
    );
  }
  
}


