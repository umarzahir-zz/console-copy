import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ResetPasswordLink } from "../../actions/adminAction";
class ForgotPassword extends Component {
  state = { email: "" };
  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`submit button clicked.`);
    this.props.sendLink(this.state.email);
    this.props.navigation.navigate('/newmsg"');
  };
  render() {
    return (
      <div className="d-flex m-auto form-container text-left flex-wrap">
        <div className="w-100">
          <div className="">
            <h1 className="text-center">Forgot Password</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="col-12 form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-footer w-100 d-flex">
              <Link
                type="submit"
                to="/newmsg"
                className="btn btn-primary form-button"
              >
                <button type="submit">submit</button>
              </Link>

              {/* <Link
                type="submit"
                to="/newcredentials"
                className="btn btn-primary form-button"
              >
                Credentials
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    sendLink: (email) => dispatch(ResetPasswordLink(email)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
