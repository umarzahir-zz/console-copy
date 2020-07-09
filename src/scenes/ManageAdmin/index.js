import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,  faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { ListGroup, Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ManageAdmin extends Component {
  state = { show: false , show2: false, adminName: null};
  handleClose = () => {
    this.setState({ show: false });
  };
  handleClose2 = () => {
    this.setState({ show2: false });
  };
  handleShow = (admin) => {
    console.log("handle show clicked");
    this.setState({ show: true, adminName: admin });
  };
  handleShow2 = () => {
    console.log("handle show clicked");
    this.setState({ show2: true, });
  };
  handleConfirm = () => {
    
    window.confirm("Are you sure ?");
    
  };
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
                  {/* change credential model */}
                  <Modal show={this.state.show2} onHide={this.handleClose2}>
                    <Modal.Header closeButton>
                      <Modal.Title>Change credential</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose2}>
                        Close
                      </Button>
                      <Button variant="success" onClick={this.handleClose2}>
                        Update
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*  model */}
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{this.state.adminName}</Modal.Title>
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
                  {  ["umar","salis","zarar","shehzad"].map(admin => {
                    return(
                    <ListGroup variant="flush">
                    <div className="row justify-content-between ">
                      <div className="col-10" >
                      <ListGroup.Item action onClick={()=>this.handleShow(admin)}>
                      <p>{admin}</p>
                      </ListGroup.Item>
                      </div>
                      <div className="col-1 pt-2 "  >
                      <button  onClick={this.handleShow2} className="btn btn-primary">
                      <FontAwesomeIcon icon={faUserEdit}/>
                        </button>
                      </div>
                      <div className="col-1 pt-2 "  >
                      <button  onClick={this.handleConfirm} className="btn btn-danger">
                      <FontAwesomeIcon icon={faTrash}/>
                      {/* <FontAwesomeIcon icon={faUserEdit}/> */}
                        </button>
                      </div>
                      
                    </div>
                </ListGroup>)
                  })}
                    
                  </div>
               
                </div>
              </div>
              <div className="ml-5 pt-5" >
              <Link to="/newadmin" className="btn btn-primary">Add Admin</Link>
              
              </div>
            

            </article>
          </div>
        </div>
      </div>
    );
  }
}
