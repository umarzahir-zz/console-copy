import React, {Component} from 'react';
import './App.css';
import Login from './scenes/Login/Login';
import Signin from './scenes/Signin/Signin';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route } from 'react-router-dom';

export default class App extends Component {
  render(){
    return (
      <div className="App">
    
        <BrowserRouter>
          <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
            <Link to="/signin">Signin</Link>
            </li>
            
          </ul>
          <Route exact path="/" component={Login} />
          <Route path="/signin" component={Signin} />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
  
}


