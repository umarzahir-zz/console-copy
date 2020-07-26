import React, { Component } from "react";

export default class singleOpp extends Component {
  componentDidMount = () => {
    console.log("single opp did mount", this.props.location.state.opp);
  };
  render() {
    return (
      <div className="container bg-dark ">
        <div className="row">
          <div className="col">
            {/* opp name */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">Opportunity Name</p>
              <p className="text-white pl-5 pt-3">
                {this.props.location.state.opp.title}
              </p>
            </div>
            {/* opp Level */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">Opportunity Level</p>
              <p className="text-white pl-5 pt-3">Begginer</p>
            </div>
            {/* people required */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">People Required</p>
              <p className="text-white pl-5 pt-3">10</p>
            </div>
            {/* location */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">Location</p>
              <p className="text-white pl-5 pt-3">
                Latitude:{this.props.location.state.opp.location[0]}
              </p>
              <p className="text-white pl-5 pt-3">
                Longitude: {this.props.location.state.opp.location[1]}
              </p>
            </div>
            {/* opp start date */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">Opportunity Start Date</p>
              <p className="text-white pl-5 pt-3">
                {" "}
                {this.props.location.state.opp.date[0]}
              </p>
            </div>
            {/* preferences */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">Opportunity preferences</p>
              <p className="text-white pl-5 pt-3">Active</p>
              <p className="text-white pl-5 pt-3">Outdoor</p>
              <p className="text-white pl-5 pt-3">Body</p>
            </div>
            {/* availablity */}
            <div className="row  ">
              <p className="text-white pl-2 pt-3">Opportunity Availbality</p>
            </div>
            <div className="row  ">
              {/* monday */}
              <div className="row mt-4 justify-content-center ">
                <div className="col-3">
                  <p>
                    <span class="badge badge-secondary">Monday</span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.monday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.monday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.monday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* tuesday */}
            <div className="row  ">
              <div className="row mt-4 justify-content-center ">
                <div className="col-3 ">
                  <p>
                    <span class="badge badge-secondary  ">Tuesday</span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.tuesday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2 ">
                    <span class="text-white">
                      {this.props.location.state.opp.days.tuesday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-4 ">
                    <span class="text-white">
                      {this.props.location.state.opp.days.tuesday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* wednesday */}
            <div className="row  ">
              <div className="row mt-4 justify-content-center ">
                <div className="col-3 ">
                  <p>
                    <span class="badge badge-secondary justify-content-center">
                      wednesday
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.wednesday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.wednesday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.wednesday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* thursday */}
            <div className="row  ">
              <div className="row mt-4 justify-content-center ">
                <div className="col-3">
                  <p>
                    <span class="badge badge-secondary">thursday</span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.thursday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2 ">
                    <span class="text-white">
                      {this.props.location.state.opp.days.thursday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2 ">
                    <span class="text-white">
                      {this.props.location.state.opp.days.thursday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* friday */}
            <div className="row  ">
              {/* monday */}
              <div className="row mt-4 justify-content-center ">
                <div className="col-3">
                  <p>
                    <span class="badge badge-secondary">Friday</span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.friday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.friday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.friday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* sat */}
            <div className="row  ">
              {/* monday */}
              <div className="row mt-4 justify-content-center ">
                <div className="col-3">
                  <p>
                    <span class="badge badge-secondary">Satarday</span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.satarday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.satarday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.satarday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* sun */}
            <div className="row  ">
              {/* monday */}
              <div className="row mt-4 justify-content-center ">
                <div className="col-3">
                  <p>
                    <span class="badge badge-secondary">Sunday</span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.sunday[0].morning
                        ? "morning"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.sunday[0].midday
                        ? "midday"
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="col-3">
                  <p className="pl-2">
                    <span class="text-white">
                      {this.props.location.state.opp.days.sunday[0].evening
                        ? "evening"
                        : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
