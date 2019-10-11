import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Login from './scenes/Login/Login';
import Signin from './scenes/Signin/Signin';
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/signin" component={Signin} />
            </div>
        )
    }
}
