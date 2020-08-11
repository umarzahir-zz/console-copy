import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Row, Col, ButtonGroup } from "react-bootstrap";
export default class Navigation extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="logo w-100% text-center">
          <h2>Ivolunteer</h2>
          <div className="border rounded" style={{ paddingBottom: 5 }}>
            <div>Ali Zahid Shahab</div>
            <div style={{ fontSize: 10, textTransform: "lowercase" }}>
              ali.zahid@konghamstageek.com
            </div>
            <div style={{ fontSize: 12 }}>Kong, Hamsta & Geek</div>
            <Button
              style={{ marginTop: 5 }}
              color="white"
              variant="outline-light"
            >
              Sign Out
            </Button>
          </div>
        </div>

        <ul className="side-menu-list">
          <li className="side-menu-item">
            <Link to="/manageadmin">manage admin</Link>
          </li>
          <li className="side-menu-item">
            <Link to="/manageagency">manage agency</Link>
          </li>
          {/* <li className="side-menu-item">
                        <Link to="/profile">profile</Link>
                    </li> */}
          <li className="side-menu-item">
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li className="side-menu-item">
            <Link to="/manageopportunity">manage opportunity</Link>
          </li>
          <li className="side-menu-item">
            <Link to="/managevolunteer">manage volunteer</Link>
          </li>
          {/* <li className="side-menu-item">
                        <Link to="/manageskills">manage skills</Link>
                    </li> */}
          {/* <li className="side-menu-item">
                        <Link to="">manage tasks</Link>
                    </li> */}
        </ul>
      </div>
    );
  }
}
