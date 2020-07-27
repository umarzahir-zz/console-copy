import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Badge, Dropdown, Row, Col } from "react-bootstrap";
import { updateOpportunity } from "../../actions/opportunityAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faCheck,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
export default class availabliy extends Component {
  render() {
    return (
      <div>
        <Row className="mb-1">
          <Col sm="auto">
            <label htmlFor="date">{this.props.day}</label>
          </Col>
          <Col sm="auto">
            <Button variant="secondary" onClick={this.handleAvail}>
              Morning
              {this.props.value1 ? (
                <FontAwesomeIcon
                  color="yellow"
                  size="lg"
                  className="pl-1"
                  icon={faCheck}
                />
              ) : (
                <FontAwesomeIcon
                  color="red"
                  size="lg"
                  className="pl-1"
                  icon={faTimes}
                />
              )}
            </Button>
          </Col>
          <Col sm="auto">
            <Button variant="secondary" onClick={this.handleAvail}>
              Midday
              {this.props.value2 ? (
                <FontAwesomeIcon
                  color="yellow"
                  size="lg"
                  className="pl-1"
                  icon={faCheck}
                />
              ) : (
                <FontAwesomeIcon
                  color="red"
                  className="pl-1"
                  size="lg"
                  icon={faTimes}
                />
              )}
            </Button>
          </Col>
          <Col sm="auto">
            <Button variant="secondary" onClick={this.handleAvail}>
              Evening
              {this.props.value3 ? (
                <FontAwesomeIcon
                  color="yellow"
                  size="lg"
                  className="pl-1"
                  icon={faCheck}
                />
              ) : (
                <FontAwesomeIcon
                  color="red"
                  className="pl-1"
                  size="lg"
                  icon={faTimes}
                />
              )}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
