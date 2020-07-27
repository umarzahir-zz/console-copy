import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Badge, Dropdown, Row, Col } from "react-bootstrap";
import { updateOpportunity } from "../../actions/opportunityAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Availablity from "../../components/oppMangment/availabliy";
import {
  faPen,
  faTrash,
  faCheck,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

class EditModal extends Component {
  state = { updateTitle: "" };
  componentDidMount = () => {
    console.log("edit model mount", this.props.opp);
    this.setState({ updateTitle: this.props.opp });
  };
  handleUpdate = (id, title) => {
    this.props.updateOpp(id, title);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClickModel = (day, avail) => {
    console.log(day, avail);
  };
  componentDidUpdate = () => {
    console.log("edit update");
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <Modal
              backdrop="static"
              centered
              show={this.props.show}
              onHide={this.props.handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit Opportunity</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row className=" mb-2 ">
                  <Col sm="3">
                    {" "}
                    <label htmlFor="title">Title</label>
                  </Col>
                  <Col sm="9">
                    {" "}
                    <input
                      style={{ width: "100%" }}
                      defaultValue={this.props.opp.title}
                      type="text"
                      name="updateTitle"
                      id="title"
                      onChange={this.handleChange}
                    ></input>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col sm="2">
                    <label htmlFor="title">Location</label>
                  </Col>
                  <Col sm="1">
                    <label htmlFor="title">Lat</label>
                  </Col>
                  <Col sm="4">
                    <input
                      style={{ width: "100%" }}
                      defaultValue={this.props.opp.location[0]}
                      type="text"
                      name="updateTitle"
                      id="latitude"
                      onChange={this.handleChange}
                    ></input>
                  </Col>
                  <Col sm="1">
                    <label htmlFor="title">Long</label>
                  </Col>
                  <Col sm="4">
                    <input
                      style={{ width: "100%" }}
                      defaultValue={this.props.opp.location[1]}
                      type="text"
                      name="updateTitle"
                      id="longitude"
                      onChange={this.handleChange}
                    ></input>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col sm="2">
                    {" "}
                    <label htmlFor="date">Date</label>
                  </Col>
                  <Col sm="10">
                    {" "}
                    <p>{this.props.opp.date}</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <label htmlFor="date">Opportunity preferences</label>
                  </Col>
                  <Col>
                    {" "}
                    <p>this.props.opp.preferences</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>Mellow</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>Indoor</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">
                    <label htmlFor="date">Availablity</label>
                  </Col>
                </Row>
                <Availablity
                  day="Mon"
                  value1={this.props.opp.days.monday[0].morning}
                  value2={this.props.opp.days.monday[0].midday}
                  value3={this.props.opp.days.monday[0].evening}
                ></Availablity>
                {/* tuesday */}
                <Availablity
                  day="Tue"
                  value1={this.props.opp.days.tuesday[0].morning}
                  value2={this.props.opp.days.tuesday[0].midday}
                  value3={this.props.opp.days.tuesday[0].evening}
                ></Availablity>
                {/* wednesday */}
                <Availablity
                  day="Wed"
                  value1={this.props.opp.days.wednesday[0].morning}
                  value2={this.props.opp.days.wednesday[0].midday}
                  value3={this.props.opp.days.wednesday[0].evening}
                ></Availablity>
                {/* thursday */}
                <Availablity
                  day="Thu"
                  value1={this.props.opp.days.thursday[0].morning}
                  value2={this.props.opp.days.thursday[0].midday}
                  value3={this.props.opp.days.thursday[0].evening}
                ></Availablity>
                {/* friday */}
                <Availablity
                  day="Fri"
                  value1={this.props.opp.days.friday[0].morning}
                  value2={this.props.opp.days.friday[0].midday}
                  value3={this.props.opp.days.friday[0].evening}
                ></Availablity>
                {/* satarday */}
                <Availablity
                  day="Sat"
                  value1={this.props.opp.days.satarday[0].morning}
                  value2={this.props.opp.days.satarday[0].midday}
                  value3={this.props.opp.days.satarday[0].evening}
                ></Availablity>
                {/* sunday */}
                <Availablity
                  day="Sun"
                  value1={this.props.opp.days.sunday[0].morning}
                  value2={this.props.opp.days.sunday[0].midday}
                  value3={this.props.opp.days.sunday[0].evening}
                ></Availablity>
                {/* <Row>
                  <Col sm="auto">
                    <label htmlFor="date">Monday</label>
                  </Col>
                  <Col sm="auto">
                    <Button variant="secondary" onClick={this.handleAvail}>
                      Morning
                      {this.props.opp.days.monday[0].morning ? (
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
                      {this.props.opp.days.monday[0].midday ? (
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
                      {this.props.opp.days.monday[0].Evening ? (
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
                </Row> */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() =>
                    this.handleUpdate(this.props.id, this.state.updateTitle)
                  }
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateOpp: (id, title) => {
      dispatch(updateOpportunity(id, title));
    },
  };
};
export default connect(null, mapDispatchToProps)(EditModal);
