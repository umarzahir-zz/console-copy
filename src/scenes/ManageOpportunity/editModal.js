import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { Button, Modal, Row, Col, ButtonGroup } from "react-bootstrap";
import { updateOpportunity } from "../../actions/opportunityAction";
import Availablity from "../../components/oppMangment/availabliy";

class EditModal extends Component {
  state = {
    oppId: null,
    date: new Date(),
    title: null,
    updateTitle: "",
    showCal: false,
    mondaymorning: null,
    mondaymidday: null,
    mondayevening: null,

    tuesdaymorning: null,
    tuesdaymidday: null,
    tuesdayevening: null,

    wednesdaymorning: null,
    wednesdaymidday: null,
    wednesdayevening: null,

    thursdaymorning: null,
    thursdaymidday: null,
    thursdayevening: null,

    fridaymorning: null,
    fridaymidday: null,
    fridayevening: null,

    saturdaymorning: null,
    saturdaymidday: null,
    saturdayevening: null,

    sundaymorning: null,
    sundaymidday: null,
    sundayevening: null,
  };
  componentDidMount = () => {
    console.log("edit model mount", this.props.opp);
    this.setState({
      updateTitle: this.props.opp,

      oppId: this.props.opp._id,

      mondaymorning: this.props.opp.days.monday[0].morning,
      mondaymidday: this.props.opp.days.monday[0].midday,
      mondayevening: this.props.opp.days.monday[0].evening,

      tuesdaymorning: this.props.opp.days.tuesday[0].morning,
      tuesdaymidday: this.props.opp.days.tuesday[0].midday,
      thursdayevening: this.props.opp.days.tuesday[0].evening,

      wednesdaymorning: this.props.opp.days.wednesday[0].morning,
      wednesdaymidday: this.props.opp.days.wednesday[0].midday,
      wednesdayevening: this.props.opp.days.wednesday[0].evening,

      thursdaymorning: this.props.opp.days.thursday[0].morning,
      thursdaymidday: this.props.opp.days.thursday[0].midday,
      thursdayevening: this.props.opp.days.thursday[0].evening,

      fridaymorning: this.props.opp.days.friday[0].morning,
      fridaymidday: this.props.opp.days.friday[0].midday,
      fridayevening: this.props.opp.days.friday[0].evening,

      saturdaymorning: this.props.opp.days.satarday[0].morning,
      saturdaymidday: this.props.opp.days.satarday[0].midday,
      saturdayevening: this.props.opp.days.satarday[0].evening,

      sundaymorning: this.props.opp.days.sunday[0].morning,
      sundaymidday: this.props.opp.days.sunday[0].midday,
      sundayevening: this.props.opp.days.sunday[0].evening,

      //disabled status
      one0: this.props.opp.preferences.one[0],
      one1: this.props.opp.preferences.one[1],
      one2: this.props.opp.preferences.one[2],

      two0: this.props.opp.preferences.two[0],
      two1: this.props.opp.preferences.two[1],
      two2: this.props.opp.preferences.two[2],

      three0: this.props.opp.preferences.three[0],
      three1: this.props.opp.preferences.three[1],
      three2: this.props.opp.preferences.three[2],

      four0: this.props.opp.preferences.four[0],
      four1: this.props.opp.preferences.four[1],
      four2: this.props.opp.preferences.four[2],
    });
  };
  handleChange1 = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleChange = (event, day) => {
    const fullName = day + event.target.name;
    this.setState({ [fullName]: !this.state[fullName] });
  };
  handleClickModel = (day, avail) => {
    console.log(day, avail);
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("edit update");
    if (prevProps.opp._id !== this.props.opp._id) {
      //disabled statuss
      this.setState({
        oppId: this.props.opp._id,

        mondaymorning: this.props.opp.days.monday[0].morning,
        mondaymidday: this.props.opp.days.monday[0].midday,
        mondayevening: this.props.opp.days.monday[0].evening,

        tuesdaymorning: this.props.opp.days.tuesday[0].morning,
        tuesdaymidday: this.props.opp.days.tuesday[0].midday,
        thursdayevening: this.props.opp.days.tuesday[0].evening,

        wednesdaymorning: this.props.opp.days.wednesday[0].morning,
        wednesdaymidday: this.props.opp.days.wednesday[0].midday,
        wednesdayevening: this.props.opp.days.wednesday[0].evening,

        thursdaymorning: this.props.opp.days.thursday[0].morning,
        thursdaymidday: this.props.opp.days.thursday[0].midday,
        thursdayevening: this.props.opp.days.thursday[0].evening,

        fridaymorning: this.props.opp.days.friday[0].morning,
        fridaymidday: this.props.opp.days.friday[0].midday,
        fridayevening: this.props.opp.days.friday[0].evening,

        saturdaymorning: this.props.opp.days.satarday[0].morning,
        saturdaymidday: this.props.opp.days.satarday[0].midday,
        saturdayevening: this.props.opp.days.satarday[0].evening,

        sundaymorning: this.props.opp.days.sunday[0].morning,
        sundaymidday: this.props.opp.days.sunday[0].midday,
        sundayevening: this.props.opp.days.sunday[0].evening,

        one0: this.props.opp.preferences.one[0],
        one1: this.props.opp.preferences.one[1],
        one2: this.props.opp.preferences.one[2],

        two0: this.props.opp.preferences.two[0],
        two1: this.props.opp.preferences.two[1],
        two2: this.props.opp.preferences.two[2],

        three0: this.props.opp.preferences.three[0],
        three1: this.props.opp.preferences.three[1],
        three2: this.props.opp.preferences.three[2],

        four0: this.props.opp.preferences.four[0],
        four1: this.props.opp.preferences.four[1],
        four2: this.props.opp.preferences.four[2],
      });
    }
  };
  handleDisabled = (event) => {
    console.log("disblae clicked");
    console.log(event.target.name);
    if (event.target.name === "one0") {
      this.setState({ one0: true, one1: false, one2: false });
    }
    if (event.target.name === "one1") {
      this.setState({ one1: true, one0: false, one2: false });
    }
    if (event.target.name === "one2") {
      this.setState({ one2: true, one0: false, one1: false });
    }

    if (event.target.name === "two0") {
      this.setState({ two0: true, two1: false, two2: false });
    }
    if (event.target.name === "two1") {
      this.setState({ two1: true, two0: false, two2: false });
    }
    if (event.target.name === "two2") {
      this.setState({ two2: true, two0: false, two1: false });
    }

    if (event.target.name === "three0") {
      this.setState({ three0: true, three1: false, three2: false });
    }
    if (event.target.name === "three1") {
      this.setState({ three1: true, three0: false, three2: false });
    }
    if (event.target.name === "three2") {
      this.setState({ three2: true, three0: false, three1: false });
    }

    if (event.target.name === "four0") {
      this.setState({ four0: true, four1: false, four2: false });
    }
    if (event.target.name === "four1") {
      this.setState({ four1: true, four0: false, four2: false });
    }
    if (event.target.name === "four2") {
      this.setState({ four2: true, four0: false, four1: false });
    }
    // this.setState({ [event.target.name]: !this.state[event.target.name] });
  };
  togleCal = () => {
    this.setState({ showCal: !this.state.showCal });
  };
  handleUpdate = () => {
    let days = {
      monday: [
        {
          morning: this.state.mondaymorning,
          midday: this.state.mondaymidday,
          evening: this.state.mondayevening,
        },
      ],
      tuesday: [
        {
          morning: this.state.tuesdaymorning,
          midday: this.state.tuesdaymidday,
          evening: this.state.tuesdayevening,
        },
      ],
      wednesday: [
        {
          morning: this.state.wednesdaymorning,
          midday: this.state.wednesdaymidday,
          evening: this.state.wednesdayevening,
        },
      ],
      thursday: [
        {
          morning: this.state.thursdaymorning,
          midday: this.state.thursdaymidday,
          evening: this.state.thursdayevening,
        },
      ],
      friday: [
        {
          morning: this.state.fridaymorning,
          midday: this.state.fridaymidday,
          evening: this.state.fridayevening,
        },
      ],
      satarday: [
        {
          morning: this.state.saturdaymorning,
          midday: this.state.saturdaymidday,
          evening: this.state.saturdayevening,
        },
      ],
      sunday: [
        {
          morning: this.state.sundaymorning,
          midday: this.state.sundaymidday,
          evening: this.state.sundayevening,
        },
      ],
    };
    console.log({ days });

    let preferences = {
      one: [this.state.one0, this.state.one1, this.state.one2],
      two: [this.state.two0, this.state.two1, this.state.two2],
      three: [this.state.three0, this.state.three1, this.state.three2],
      four: [this.state.four0, this.state.four1, this.state.four2],
    };
    console.log({ preferences });
    const data = {
      days: { ...days },
      preferences: { ...preferences },
      title: this.state.title,
    };
    this.props.updateOpp(this.state.oppId, data);
  };
  render() {
    console.log(".................", this.state);
    return (
      <div>
        <Row>
          <Col sm="12">
            <Modal
              size="lg"
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
                      onChange={this.handleChange1}
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
                <Row className="mt-4">
                  <Col sm="2">
                    {" "}
                    <label htmlFor="date">Date</label>
                  </Col>
                  <Col sm="4">
                    {" "}
                    <p>{this.props.opp.date}</p>
                  </Col>
                  <Col sm="2">
                    <FontAwesomeIcon
                      onClick={this.togleCal}
                      color="green"
                      size="lg"
                      className="pl-1"
                      icon={faPen}
                    />
                  </Col>
                  {this.state.showCal ? (
                    <Col sm="4">
                      <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                      />
                    </Col>
                  ) : null}
                </Row>
                <Row>
                  <Col sm="auto">
                    <label htmlFor="date">Opportunity Preferences</label>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <ButtonGroup className="mb-2">
                      <Button
                        name="one0"
                        onClick={this.handleDisabled}
                        variant={this.state.one0 ? "success" : "danger"}
                      >
                        Indoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="one1"
                        variant={this.state.one1 ? "success" : "danger"}
                      >
                        Outdoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="one2"
                        variant={this.state.one2 ? "success" : "danger"}
                      >
                        Both
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <ButtonGroup className="mb-2">
                      <Button
                        name="two0"
                        onClick={this.handleDisabled}
                        variant={this.state.two0 ? "success" : "danger"}
                      >
                        Indoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="two1"
                        variant={this.state.two1 ? "success" : "danger"}
                      >
                        Outdoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="two2"
                        variant={this.state.two2 ? "success" : "danger"}
                      >
                        Both
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <ButtonGroup className="mb-2">
                      <Button
                        name="three0"
                        onClick={this.handleDisabled}
                        variant={this.state.three0 ? "success" : "danger"}
                      >
                        Indoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="three1"
                        variant={this.state.three1 ? "success" : "danger"}
                      >
                        Outdoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="three2"
                        variant={this.state.three2 ? "success" : "danger"}
                      >
                        Both
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <ButtonGroup className="mb-2">
                      <Button
                        name="four0"
                        onClick={this.handleDisabled}
                        variant={this.state.four0 ? "success" : "danger"}
                      >
                        Indoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="four1"
                        variant={this.state.four1 ? "success" : "danger"}
                      >
                        Outdoor
                      </Button>
                      <Button
                        onClick={this.handleDisabled}
                        name="four2"
                        variant={this.state.four2 ? "success" : "danger"}
                      >
                        Both
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">
                    <label htmlFor="date">Availablity</label>
                  </Col>
                </Row>
                <Availablity
                  day="Mon"
                  updateState={(event) => this.handleChange(event, "monday")}
                  value1={this.state.mondaymorning}
                  value2={this.state.mondaymidday}
                  value3={this.state.mondayevening}
                ></Availablity>
                {/* tuesday */}
                <Availablity
                  day="Tue"
                  updateState={(event) => this.handleChange(event, "tuesday")}
                  value1={this.state.tuesdaymorning}
                  value2={this.state.tuesdaymidday}
                  value3={this.state.tuesdayevening}
                ></Availablity>
                {/* wednesday */}
                <Availablity
                  day="Wed"
                  updateState={(event) => this.handleChange(event, "wednesday")}
                  value1={this.state.wednesdaymorning}
                  value2={this.state.wednesdaymidday}
                  value3={this.state.wednesdayevening}
                ></Availablity>
                {/* thursday */}
                <Availablity
                  day="Thu"
                  updateState={(event) => this.handleChange(event, "thursday")}
                  value1={this.state.thursdaymorning}
                  value2={this.state.thursdaymidday}
                  value3={this.state.thursdayevening}
                ></Availablity>
                {/* friday */}
                <Availablity
                  day="Fri"
                  updateState={(event) => this.handleChange(event, "friday")}
                  value1={this.state.fridaymorning}
                  value2={this.state.fridaymidday}
                  value3={this.state.fridayevening}
                ></Availablity>
                {/* satarday */}
                <Availablity
                  day="Sat"
                  updateState={(event) => this.handleChange(event, "saturday")}
                  value1={this.state.saturdaymorning}
                  value2={this.state.saturdaymidday}
                  value3={this.state.saturdayevening}
                ></Availablity>
                {/* sunday */}
                <Availablity
                  day="Sun"
                  updateState={(event) => this.handleChange(event, "sunday")}
                  value1={this.state.sundaymorning}
                  value2={this.state.sundaymidday}
                  value3={this.state.sundayevening}
                ></Availablity>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleUpdate}>
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
    updateOpp: (id, data) => {
      dispatch(updateOpportunity(id, data));
    },
  };
};
export default connect(null, mapDispatchToProps)(EditModal);
