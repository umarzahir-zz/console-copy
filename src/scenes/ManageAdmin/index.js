import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllAdmin,
  updateAdminCredentials,
  adminUpdatePassReset,
} from "../../actions/adminAction";

class ManageAdmin extends Component {
  state = {
    show: false,
    show2: false,
    admin: { name: "", userName: "", email: "" },
    newPassword: null,
    id: null,
  };
  handlePassowrdUpdate = (event) => {
    event.preventDefault();
    console.log("handle update password ()", this.state);
    this.props.UpdatPassword(this.state.id, this.state.newPassword);
  };
  onChangePassword = (event) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleClose2 = () => {
    this.setState({ show2: false });
    this.props.resetAdminPassStatus();
  };
  handleShow = (admin) => {
    console.log("handle show clicked");
    this.setState({ show: true, admin });
  };
  handleShow2 = (id) => {
    console.log("handle show clicked, and id is ", id);
    this.setState({ show2: true, id });
  };
  handleConfirm = () => {
    window.confirm("Are you sure ?");
  };
  componentDidMount = () => {
    this.props.GetAllAdmin();
  };
  render() {
    console.log(this.props.allAdmins);
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
                    <h1>manage admin</h1>
                  </div>
                  {/* change credential model */}
                  <Modal show={this.state.show2} onHide={this.handleClose2}>
                    <Modal.Header closeButton>
                      <Modal.Title>Change credential</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={this.handlePassowrdUpdate}>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="New Password"
                            name="newPassword"
                            onChange={this.onChangePassword}
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Update
                        </Button>
                        <p>
                          {this.props.credentialUpdateStatus
                            ? "Password Updated"
                            : null}
                        </p>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose2}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*  model */}
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Admin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        {" "}
                        <span
                          style={{
                            paddingRight: 30,
                            textDecoration: "underline",
                          }}
                        >
                          Name
                        </span>{" "}
                        {this.state.admin.name}
                      </p>
                      <p>
                        <span
                          style={{
                            paddingRight: 30,
                            textDecoration: "underline",
                          }}
                        >
                          User Name
                        </span>{" "}
                        {this.state.admin.username}
                      </p>
                      <p>
                        <span
                          style={{
                            paddingRight: 30,
                            textDecoration: "underline",
                          }}
                        >
                          Email
                        </span>{" "}
                        {this.state.admin.email}
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* admin list */}
                  <div className="col-6">
                    {true? (
                      ["admin1", "admin2", "admin3", "admin4", "admin5"].map((admin) => {
                        return (
                          <ListGroup key={admin} variant="flush">
                            <div className="row justify-content-between ">
                              <div className="col-10">
                                <ListGroup.Item
                                  action
                                  onClick={() => this.handleShow(admin)}
                                >
                                  <p>{admin}</p>
                                </ListGroup.Item>
                              </div>
                              <div className="col-1 pt-2 ">
                                <button
                                  onClick={() => this.handleShow2(admin)}
                                  className="btn btn-primary"
                                >
                                  <FontAwesomeIcon icon={faUserEdit} />
                                </button>
                              </div>
                              <div className="col-1 pt-2 ">
                                <button
                                  onClick={this.handleConfirm}
                                  className="btn btn-danger"
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                  {/* <FontAwesomeIcon icon={faUserEdit}/> */}
                                </button>
                              </div>
                            </div>
                          </ListGroup>
                        );
                      })
                    ) : (
                      <p>...loading</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="ml-5 pt-5">
                <Link to="/newadmin" className="btn btn-primary">
                  Add Admin
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allAdmins: state.admin.allAdmins,
    credentialUpdateStatus: state.admin.adminCredentialsUpdate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetAllAdmin: () => {
      dispatch(getAllAdmin());
    },
    UpdatPassword: (id, password) => {
      dispatch(updateAdminCredentials(id, password));
    },
    resetAdminPassStatus: (id, password) => {
      dispatch(adminUpdatePassReset(id, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAdmin);
