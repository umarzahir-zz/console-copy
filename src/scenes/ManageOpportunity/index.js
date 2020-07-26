import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  deleteOpportunity,
  CurrentOpportunity,
  ActiveOpportunity,
} from "../../actions/opportunityAction";
import EditModal from "./editModal";
import { Spinner } from "react-bootstrap";
class ManageOpprtunity extends Component {
  state = { show: false, oppTitle: "dummy", id: "", editOpp: null, prev: null };
  handleShow = (opp) => {
    console.log("handle show");
    this.setState({
      editOpp: opp,
    });

    console.log("edit model data", opp);
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  componentDidMount = () => {
    console.log(this.props);

    this.props.callActiveOppps();
    this.props.callCurrentOpps();
  };
  handleSingle = (opp) => {
    console.log("handle single");
    console.log(opp);
    this.props.history.push({
      pathname: "/singleopp",
      state: { opp },
    });
    // this.props.navigation.navigate("singleopp");
    // this.props.getSingleOpp(opp);
  };
  handleOppDelete = (id) => {
    this.props.callDeleteOppAction(id);
  };
  render() {
    console.log("data of opp", this.state.editOpp);
    // console.log("prev id", this.state.prev);
    // console.log("state id", this.state.editOpp ? this.state.editOpp._id : null);
    return (
      <div className="wrapper">
        <div className="container-fluid">
          {this.state.editOpp ? (
            <EditModal
              show={this.state.show}
              handleClose={this.handleClose}
              opp={this.state.editOpp}
            ></EditModal>
          ) : null}

          <div className="row">
            <aside>
              <Navigation />
            </aside>
            <article>
              <div className="content">
                <div className="dashboard">
                  <div className="page_title">
                    <h1>manage opportunity</h1>
                  </div>
                  <div className="col-12 text-right mt-4 pr-0">
                    <Link
                      to="/AddOpportunity"
                      className="btn btn-primary gray-button"
                    >
                      Add Opportunity
                    </Link>
                  </div>
                  <div className="center-content">
                    <div className="opportunity-form col-12 p-0">
                      <div className="row">
                        <div className=" col-6">
                          <div className="result">
                            <ul className="list-group result-list">
                              {this.props.ActiveOpportunityData ? (
                                this.props.ActiveOpportunityData.map(
                                  (opportunity) => {
                                    return (
                                      <li
                                        key={opportunity._id}
                                        className="list-group-item d-flex bg-success justify-content-between align-items-center"
                                      >
                                        <p
                                          onClick={() =>
                                            this.handleSingle(opportunity)
                                          }
                                          className="list-title text-white "
                                        >
                                          {opportunity.title}
                                        </p>
                                        <div className="list-button">
                                          <button
                                            onClick={() =>
                                              this.handleShow(opportunity)
                                            }
                                            className="btn btn-primary gray-button"
                                          >
                                            <FontAwesomeIcon icon={faPen} />
                                          </button>
                                          <button
                                            onClick={() =>
                                              this.handleOppDelete(
                                                opportunity._id
                                              )
                                            }
                                            className="btn btn-primary gray-button"
                                          >
                                            <FontAwesomeIcon icon={faTrash} />
                                          </button>
                                        </div>
                                      </li>
                                    );
                                  }
                                )
                              ) : (
                                <Spinner animation="grow" />
                              )}
                              {/* current */}
                              {this.props.CurrentOpportunityData ? (
                                this.props.CurrentOpportunityData.map(
                                  (opportunity) => {
                                    return (
                                      <li
                                        key={opportunity._id}
                                        className="list-group-item d-flex bg-primary justify-content-between align-items-center"
                                      >
                                        <p
                                          onClick={() =>
                                            this.handleSingle(opportunity)
                                          }
                                          className="list-title text-white"
                                        >
                                          {opportunity.title}
                                        </p>
                                        <div className="list-button">
                                          <button
                                            onClick={() =>
                                              this.handleShow(opportunity)
                                            }
                                            className="btn btn-primary gray-button"
                                          >
                                            <FontAwesomeIcon icon={faPen} />
                                          </button>
                                          <button
                                            onClick={() =>
                                              this.handleOppDelete(
                                                opportunity._id
                                              )
                                            }
                                            className="btn btn-primary gray-button"
                                          >
                                            <FontAwesomeIcon icon={faTrash} />
                                          </button>
                                        </div>
                                      </li>
                                    );
                                  }
                                )
                              ) : (
                                <Spinner animation="grow" />
                              )}
                            </ul>
                            <nav aria-label="Page navigation example">
                              <ul className="pagination custom-pagination">
                                <li className="page-item">
                                  <Link
                                    className="page-link gray-button"
                                    to="#"
                                  >
                                    Previous
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link
                                    className="page-link gray-button"
                                    to="#"
                                  >
                                    1
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link
                                    className="page-link gray-button"
                                    to="#"
                                  >
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link
                                    className="page-link gray-button"
                                    to="#"
                                  >
                                    3
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link
                                    className="page-link gray-button"
                                    to="#"
                                  >
                                    Next
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
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
const mapPropsToState = (state) => {
  console.log("gettingn state", state.opportunity.opportunities);
  return {
    // allOpportunities: state.opportunity.opportunities,
    CurrentOpportunityData: state.opportunity.currentOpps,
    ActiveOpportunityData: state.opportunity.ActiveOpps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getOpportunityData: () => dispatch(manageOpportunity()),
    callDeleteOppAction: (id) => dispatch(deleteOpportunity(id)),
    callActiveOppps: () => dispatch(ActiveOpportunity()),
    callCurrentOpps: () => dispatch(CurrentOpportunity()),
  };
};
export default connect(mapPropsToState, mapDispatchToProps)(ManageOpprtunity);
