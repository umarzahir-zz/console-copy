import React, { Component } from "react";
import { connect } from "react-redux";
import { adminLogin,AfterSignup } from "../../actions/adminAction";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//do something...

class Login extends Component {
  state = { email: "", password: "" };
  componentDidMount() {
    this.props.as()
    console.log("did mount", this.props.LoginMessage);
    if (this.props.LoginMessage === "Login Success") {
      console.log("***********   true");
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 1000);
    }
  }
  componentDidUpdate = () => {
    console.log(this.props.LoginMessage);
    console.log("did update", this.props.LoginMessage);
    if (this.props.LoginMessage === "Login Success") {
      console.log("***********   true");

      this.props.history.push("/dashboard");
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendData(this.state);
  };
  render() {
    console.log("login");
    console.log("email", this.state.email);
    console.log(this.state.password);
    return (
      <div className="d-flex m-auto form-container text-left flex-wrap">
        <div className="w-100">
          <div className="d-flex align-items-center justify-content-between">
            <h1>Login</h1>
            <div className="">
              Not a Member yet?{" "}
              <Link className="link" to="/register">
                <b>
                  <u>Sign up</u>
                </b>
              </Link>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="col-12 form">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                required
                vlaue={this.state.email}
                onChange={this.handleChange}
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                required
                onChange={this.handleChange}
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-footer w-100 d-flex">
              <Alert
                color="info"
                isOpen={this.props.visible}
                toggle={this.onDismiss}
              >
                {this.props.LoginMessage}
              </Alert>
              <Button variant="primary" type="submit">
                {this.props.loginStatus ? "Loading......." : "Login"}
              </Button>
            </div>
          </form>
        </div>
        <div className="form-footer w-100 d-flex">
          <Link type="submit" to="/forgotpassword" className="text-secondary">
            Forgot Password?
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loginStatus: state.admin.adminLoginStatus,
    visible: state.admin.messagel,
    LoginMessage: state.admin.adminLoginMessage,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    sendData: (data) => dispatch(adminLogin(data)),
    as: () => dispatch(AfterSignup())
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Login);
