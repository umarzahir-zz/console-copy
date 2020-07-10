import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { AgencyList } from "../../actions/adminAction";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
class ManageAgency extends Component {
  componentDidMount = () => {
    this.props.getAgencyMember();
    // console.log("did mount", this.props.agencyMembersList);
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("did update", this.props.agencyMembersList);
  }

  render() {
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
                    <h1>manage agency</h1>
                  </div>

                  <div className="center-content">
                    <div className="opportunity-form col-12 p-0">
                      <div className="row">
                        <div className=" col-auto">
                          <div className="result overflow-auto h-50">
                            <ul className="list-group result-list ">
                              {this.props.agencyMembersList ? (
                                this.props.agencyMembersList.map((member) => {
                                  return (
                                    <li
                                      key={member._id}
                                      className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                      <p className="list-title">
                                        {member.name}
                                      </p>
                                      <div className="list-button">
                                        <button className="btn btn-primary gray-button">
                                          <FontAwesomeIcon icon={faPen} />
                                        </button>
                                        <button className="btn btn-primary gray-button">
                                          <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                      </div>
                                    </li>
                                  );
                                })
                              ) : (
                                <p>...Loading</p>
                              )}
                            </ul>

                            {/* <div className="nofound col-12 p-0">
                                                            <h3>No admin found</h3>
                                                        </div> */}
                          </div>
                        </div>
                        <div className="col-auto">
                          <form className="data-form">
                            <div className="form-group">
                              <label>first name</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="First name"
                              />
                            </div>
                            <div className="form-group">
                              <label>last name</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Last name"
                              />
                            </div>
                            <button className="btn btn-primary gray-button">
                              add agency
                            </button>
                          </form>
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
const mapStateToProps = (state, ownProps) => ({
  agencyMembersList: state.admin.agencyMembers,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getAgencyMember: () => {
      dispatch(AgencyList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAgency);
