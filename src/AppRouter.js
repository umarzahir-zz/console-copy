import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./scenes/Login/Login";
import Register from "./scenes/Register/Register";
import AdminDashboard from "./scenes/AdminDashboard/index.js";
import AddOpportunity from "./scenes/AddOpportunity/index.js";
import ManageOpportunity from "./scenes/ManageOpportunity/index.js";
import ManageAdmin from "./scenes/ManageAdmin/index.js";
import ManageAgency from "./scenes/ManageAgency/index.js";
import ManageVolunteer from "./scenes/ManageVolunteer/index.js";
import Profile from "./scenes/Profile";
import ManageSkills from "./scenes/ManageSkills";
import ManageTask from "./scenes/ManageTask";
import ImageUpload from "./scenes/ImageUpload/ImageUpload";
import ForgotPassword from "./scenes/ForgotPassword/index";
import NewPassword from "./scenes/NewPassword/index";
import PasswordMsg from "./scenes/PasswordMsg/index";
import { connect } from "react-redux";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={AdminDashboard} />
          <Route exact path="/addopportunity" component={AddOpportunity} />
          <Route
            exact
            path="/manageopportunity"
            component={ManageOpportunity}
          />
          <Route exact path="/manageadmin" component={ManageAdmin} />
          <Route exact path="/manageagency" component={ManageAgency} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/managevolunteer" component={ManageVolunteer} />
          <Route exact path="/manageskills" component={ManageSkills} />
          <Route exact path="/imageupload" component={ImageUpload} />
          {this.props.LoginMessage === "Login Success" ? (
            <Route exact path="/" component={ManageTask} />
          ) : (
            <Route exact path="/" component={Login} />
          )}

          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/newcredentials" component={NewPassword} />
          <Route exact path="/newMsg" component={PasswordMsg} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginStatus: state.admin.adminLoginStatus,
    visible: state.admin.messagel,
    LoginMessage: state.admin.adminLoginMessage,
  };
};
export default connect(mapStateToProps)(AppRouter);
