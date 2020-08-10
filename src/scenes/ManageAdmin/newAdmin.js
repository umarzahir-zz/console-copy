import React, { Component } from "react";
import { adminSignup1 } from "../../actions/adminAction";
import { connect } from "react-redux";

class newAdmin extends Component {
  state = { name: null, email: null, password1: null, password2: null };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSave = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.creatAdmin(this.state);
  };
  render() {
    return (
      <div className="container  mt-5  ">
        <div className="row  justify-content-center mx-auto">
          <div className="col-6">
            <div>
              <form className="data-form">
                {/* <div className="form-group profile-pic d-flex flex-wrap">
                                                        <label>user name</label>
                                                        <span className="profilepic-outer">
                                                            <img src={require('../../images/user.png')} />
                                                        </span>
                                                        <button className="btn btn-primary gray-button">upload</button>
                                                    </div> */}
                <div className="form-group">
                  <label>user name</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="User name"
                  />
                </div>
                <div className="form-group">
                  <label>user email</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="User email"
                  />
                </div>

                <div className="form-group">
                  <label>user password</label>
                  <input
                    onChange={this.handleChange}
                    name="password1"
                    className="form-control"
                    type="password"
                    placeholder="User email"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    onChange={this.handleChange}
                    name="password2"
                    className="form-control"
                    type="password"
                    placeholder="User email"
                  />
                </div>
                {/* <div className="form-group">
                              <label>role type</label>
                              <select className="form-control">
                                <option>Beginner</option>
                                <option>Expert</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>agency</label>
                              <select className="form-control">
                                <option>Beginner</option>
                                <option>Expert</option>
                              </select>
                            </div> */}
                <button
                  onClick={this.handleSave}
                  className="btn btn-primary gray-button"
                >
                  add admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapsStateToPorps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    creatAdmin: (data) => {
      dispatch(adminSignup1(data));
    },
  };
};

export default connect(mapsStateToPorps, mapDispatchToProps)(newAdmin);
