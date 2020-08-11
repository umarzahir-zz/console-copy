import React, { Component } from "react";
import { creatAdmin, resetAdminMessage } from "../../actions/adminAction";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";

class newAdmin extends Component {
  state = {
    name: null,
    email: null,
    password1: null,
    password2: null,
    userName: null,
    showModel: true,
    refresh: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = () => {
    console.log("handle close called");
    this.setState({ showModel: false });
    this.props.reset();
  };
  handleSave = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.creatAdmin(this.state);
    this.setState({ showModel: true });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container  mt-5  ">
        <div className="row  justify-content-center mx-auto">
          <div className="col-6">
            <div>
              <form className="data-form" encType="multi">
                <div className="form-group profile-pic d-flex flex-wrap">
                  <label>Admin Image</label>
                  <span className="profilepic-outer">
                    <input
                      type="file"
                      name="file"
                      accept="image/*"
                      onChange={this.handleImage}
                    ></input>
                    {this.state.imageUrl ? (
                      <img src={require("../../images/user.png")} alt="" />
                    ) : (
                      <img src={require("../../images/user.png")} alt="" />
                    )}
                  </span>
                </div>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="userName"
                    placeholder="User name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={this.handleChange}
                    name="password1"
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    onChange={this.handleChange}
                    name="password2"
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                {this.props.message ? (
                  <Toast show={this.state.showModel} onClose={this.handleClose}>
                    <Toast.Header>
                      <small>Admin</small>
                    </Toast.Header>
                    <Toast.Body>{this.props.message}</Toast.Body>
                  </Toast>
                ) : null}
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
                  {this.props.loading ? "...Loading" : "Add Admin"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapsStateToPorps = (store) => {
  console.log(store.admin);
  return {
    loading: store.admin.isAdminLoding,
    message: store.admin.adminSignupMessage,
    messageStatus: true,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    creatAdmin: (data) => {
      dispatch(creatAdmin(data));
    },
    reset: () => {
      dispatch(resetAdminMessage());
    },
  };
};

export default connect(mapsStateToPorps, mapDispatchToProps)(newAdmin);
