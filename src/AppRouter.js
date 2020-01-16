import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './scenes/Login/Login';
import Signin from './scenes/Signin/Signin';
import AdminDashboard from "./scenes/AdminDashboard/index.js";
export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/signin' component={Signin} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={AdminDashboard} />
                </Switch>
            </div>
        )
    }
}
