import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from "./AppRouter";
class App extends Component {
  componentDidMount() {
    // store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
         <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
