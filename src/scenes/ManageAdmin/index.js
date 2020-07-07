import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
import { ListGroup, Modal, Button } from "react-bootstrap";

export default class ManageAdmin extends Component {
  state = { show: false };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    console.log("handle show clicked");

    this.setState({ show: true });
  };
  handleConfirm = () => {};
  render() {
    console.log(this.state.show);
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
                  {/* model */}
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{this.props.adminName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* admin list */}
                  <div className="col-6">
                    <ListGroup variant="flush">
                      <ListGroup.Item action onClick={this.handleShow}>
                        Cras justo odio
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={this.handleShow}>
                        Dapibus ac facilisis in
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={this.handleShow}>
                        Morbi leo risus
                      </ListGroup.Item>

                      <ListGroup.Item action onClick={this.handleShow}>
                        <div className="row justify-content-between ">
                          <p> Porta ac consectetur ac</p>

                          <svg
                            onClick={this.handleShow}
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-archive-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
                            />
                          </svg>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="center-content">
                    <div className="opportunity-form col-12 p-0">
                      <div className="row">
                        <div className="col-6">
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
                                className="form-control"
                                type="text"
                                placeholder="User name"
                              />
                            </div>
                            <div className="form-group">
                              <label>user email</label>
                              <input
                                className="form-control"
                                type="email"
                                placeholder="User email"
                              />
                            </div>
                            <div className="form-group">
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
                            </div>

                            <button className="btn btn-primary gray-button">
                              add admin
                            </button>
                          </form>
                        </div>
                        <div className=" col-6">
                          <div className="result">
                            <div className="nofound col-12 p-0">
                              <h3>No admin found</h3>
                            </div>
                          </div>
                          {/* <ul>
                                                            <li>
                                                                <p>Admin</p>
                                                            </li>
                                                        </ul> */}
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
