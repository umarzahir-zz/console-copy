import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";
import {
  AgencyList,
  ResetState,
  createAgency,
  resetAgencyMessage,
} from "../../actions/adminAction";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
class ManageAgency extends Component {
  state = {
    imageUrl: null,
    selectedFile: null,
    name: null,
    email: null,
    userName: null,
    password1: null,
    showModel: true,
    password2: null,
  };
  handleClose = () => {
    console.log("handle close called");
    this.setState({ showModel: false });
    this.props.reset();
  };
  handleImage = (event) => {
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSave = (event) => {
    event.preventDefault();
    this.props.createAgency(this.state);
    this.setState({ showModel: true });
  };
  componentDidMount = () => {
     this.props.getAgencyMember();
    // window.addEventListener("beforeunload", this.callEvent);
    // console.log("did mount", this.props.agencyMembersList);
  };
  // componentWillUnmount = () => {
  //   window.removeEventListener("beforeunload", this.callEvent);
  // };
  // callEvent = (e) => {
  //   e.preventDefault();
  //   this.props.clearState();
  // };
  componentDidUpdate(prevProps, prevState) {
    // console.log("did update", this.props.agencyMembersList);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <aside>
              <Navigation />
            </aside>
            <article>
              <div className="content">
                <div className="dashboard">
                  <div className="page_title">
                    <h1>manage agency</h1>
                  </div>

                  <div className="center-content">
                    <div className="opportunity-form col-12 p-0">
                      <div className="row">
                        <div className=" col-auto">
                          <div className="result overflow-auto h-50">
                            <ul className="list-group result-list ">
                             
                              {this.props.agencyMembersList ? (
                                this.props.agencyMembersList.map((member) => {
                                  return (
                                    <li
                                      key={member._id}
                                      className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      <p className="list-title">
                                        {member.name}
                                      </p>
                                      <div className="list-button">
                                        <button className="btn btn-primary gray-button">
                                          <FontAwesomeIcon icon={faPen} />
                                        </button>
                                        <button className="btn btn-primary gray-button">
                                          <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                      </div>
                                    </li>
                                  );
                                })
                              ) : (
                                <p>...Loading</p>
                              )}
                            </ul>

                            {/* <div className="nofound col-12 p-0">
                                                            <h3>No admin found</h3>
                                                        </div> */}
                          </div>
                        </div>
                        <div className="col-auto">
                          <form className="data-form" encType="multi">
                            <div className="form-group profile-pic d-flex flex-wrap">
                              <label>Agency Image</label>
                              <span className="profilepic-outer">
                                <input
                                  type="file"
                                  name="file"
                                  accept="image/*"
                                  onChange={this.handleImage}
                                ></input>
                                {this.state.imageUrl ? (
                                  <img
                                    src={require("../../images/user.png")}
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    src={require("../../images/user.png")}
                                    alt=""
                                  />
                                )}
                              </span>
                            </div>
                            {/* <div className="form-group profile-pic d-flex flex-wrap">
                  <label>user name</label>
                  <span className="profilepic-outer">
                    <img src={require("../../images/user.png")} />
                  </span>
                  <button className="btn btn-primary gray-button">
                    upload
                  </button>
                </div> */}
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                onChange={this.handleChange}
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
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
                              <label>user Name</label>
                              <input
                                onChange={this.handleChange}
                                className="form-control"
                                type="text"
                                name="userName"
                                placeholder="User Name"
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
                              {this.props.loading ? "...Loading" : "Add Agency"}
                            </button>
                            {this.props.message ? (
                              <Toast
                                show={this.state.showModel}
                                onClose={this.handleClose}
                              >
                                <Toast.Header>
                                  <small>Agency</small>
                                </Toast.Header>
                                <Toast.Body>{this.props.message}</Toast.Body>
                              </Toast>
                            ) : null}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  agencyMembersList: state.admin.agencyMembers,
  loading: state.admin.isAgencyLoding,
  message: state.admin.agencySignupMessage,
});
const mapDispatchToProps = (dispatch) => {
  return {
    createAgency: (data) => {
      dispatch(createAgency(data));
    },
    getAgencyMember: () => {
      dispatch(AgencyList());
    },
    clearState: () => {
      dispatch(ResetState());
    },
    reset: () => {
      dispatch(resetAgencyMessage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAgency);
