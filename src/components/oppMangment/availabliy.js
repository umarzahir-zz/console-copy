import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
export default class availabliy extends Component {
  render() {
    console.log("cheking  props", this.props.value1);
    return (
      <div>
        <Row className="mb-1 ">
          <Col sm="3">
            <label htmlFor="date">{this.props.day}</label>
          </Col>
          <Col sm="3">
            <Button
              name="morning"
              variant="secondary"
              onClick={(event) => this.props.updateState(event)}
            >
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
          <Col sm="3">
            <Button
              name="midday"
              onClick={(event) => this.props.updateState(event)}
              variant="secondary"
            >
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
          <Col sm="3">
            <Button
              name="evening"
              onClick={(event) => this.props.updateState(event)}
              variant="secondary"
            >
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
