import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './scenes/Login/Login';
import Signin from './scenes/Signin/Signin';
import AdminDashboard from "./scenes/AdminDashboard/index.js";
import AddOpportunity from "./scenes/AddOpportunity/index.js";
import ManageOpportunity from "./scenes/ManageOpportunity/index.js";
import ManageAdmin from "./scenes/ManageAdmin/index.js";
import ManageAgency from "./scenes/ManageAgency/index.js";
import ManageVolunteer from "./scenes/ManageVolunteer/index.js";
import Profile from './scenes/Profile';
import ManageSkills from './scenes/ManageSkills';
import ManageTask from './scenes/ManageTask';
import ImageUpload from './scenes/ImageUpload/ImageUpload';
export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/signin' component={Signin} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/dashboard' component={AdminDashboard} />
                    <Route exact path='/addopportunity'component={AddOpportunity}/>
                    <Route exact path='/manageopportunity'component={ManageOpportunity}/>
                    <Route exact path='/manageadmin' component={ManageAdmin}/>
                    <Route exact path='/manageagency' component={ManageAgency}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/managevolunteer' component={ManageVolunteer}/>
                    <Route exact path='/manageskills' component={ManageSkills}/>
                    <Route exact path='/imageupload' component={ImageUpload}/>
                    <Route exact path='/' component={ManageTask}/>
                </Switch>
            </div>
        )
    }
}
