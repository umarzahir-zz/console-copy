import React, { Component } from "react";

export default class singleOpp extends Component {
  componentDidMount = () => {
    console.log("single opp did mount", this.props.location.state.opp);
  };
  render() {
    return (
      <div className="container  ">
        <div className="row">
          <div className="col">
            {/* opp name */}
            <div className="col bg-success">
              <h3>Opportunity Name</h3>
              <p>{this.props.location.state.opp.title}</p>
            </div>
            {/* opp Level */}
            <div className="col bg-primary">
              <h3>Opportunity Level</h3>
              <p>Begginer</p>
            </div>
            {/* people required */}
            <div className="col">
              <h3>People Required</h3>
              <h2>
                <span class="badge badge-secondary">10</span>
              </h2>
              {/* location */}
              <div className="col">
                <h3>Location</h3>
                <div className="row justify-content-center mt-3  ">
                  <p className="pr-4">
                    Latitude:{this.props.location.state.opp.location[0]}
                  </p>
                  <p className="pl-4">
                    Longitude: {this.props.location.state.opp.location[1]}
                  </p>
                </div>
              </div>
              {/* opp start date */}
              <div className="col">
                <h3>Opportunity Start Date</h3>

                <h2>
                  <span class="badge badge-secondary">
                    {this.props.location.state.opp.date[0]}
                  </span>
                </h2>
              </div>
              {/* preferences */}
              <div className="col">
                <h3>Opportunity preferences</h3>
                <div className="row mt-4 justify-content-around">
                  <p>Active</p>
                  <p>Outdoor</p>
                  <p>Body</p>
                </div>
              </div>
              {/* availablity */}
              <div className="col  ">
                <h3>Opportunity Availbality</h3>

                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">Monday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.monday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.monday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.monday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">Tuesday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.tuesday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.tuesday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.tuesday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">wednesday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.wednesday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.wednesday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.wednesday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">thursday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.thursday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.thursday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.thursday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.sunday[0].midday
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">friday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.friday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.friday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.friday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">satarday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.satarday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.satarday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.satarday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
                <div className="row mt-4 justify-content-center ">
                  <h2 className="pl-4">
                    <span class="badge badge-secondary">sunday</span>
                  </h2>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.sunday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.sunday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </h4>
                  <h4 className="pl-4 mt-1">
                    <span class="badge badge-secondary">
                      {this.props.location.state.opp.days.sunday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
