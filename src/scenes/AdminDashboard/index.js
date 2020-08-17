import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
// import  DashboardChart from "../../components/Charts/index.js";
import Pie from "../../components/PieChart/pie";

export default class AdminDashboard extends Component {
  render() {
    console.log("dashboard render");
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
                    <h1>admin dashboard</h1>
                  </div>

                  <div className="center-content">
                    <div className="filter">
                      <div className="row">
                        <form className="d-flex flew-wrap w-100 ">
                          <div className="form-group col-4">
                            <select className="form-control">
                              <option>Alisson</option>
                              <option>Caoimhin Kelleher</option>
                              <option>Andy Lonergan</option>
                              <option>Adrián</option>
                            </select>
                          </div>
                          <div className="form-group col-4">
                            <select className="form-control">
                              <option>Alisson</option>
                              <option>Caoimhin Kelleher</option>
                              <option>Andy Lonergan</option>
                              <option>Adrián</option>
                            </select>
                          </div>
                          <div className="form-group col-4">
                            <select className="form-control">
                              <option>Alisson</option>
                              <option>Caoimhin Kelleher</option>
                              <option>Andy Lonergan</option>
                              <option>Adrián</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="">
                      <Pie />
                    </div>
                    <div className="row">
                      <div className="dash-card d-flex flex-wrap w-100">
                        <div className="card-outer col-3">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                opportunities created
                              </h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                83
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="card-outer col-3">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">
                                opportunities completed
                              </h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                83
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* <div className="card-outer col-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">task created</h5>
                                                            <h6 className="card-subtitle mb-2 text-muted">83</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-outer col-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">task completed</h5>
                                                            <h6 className="card-subtitle mb-2 text-muted">83</h6>
                                                        </div>
                                                    </div>
                                                </div> */}
                        <div className="card-outer col-3">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">active users</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                83
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* <div className="card-outer col-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">number of downloads </h5>
                                                            <h6 className="card-subtitle mb-2 text-muted">83</h6>
                                                        </div>
                                                    </div>
                                                </div> */}
                        {/* <div className="card-outer col-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">task rejected</h5>
                                                            <h6 className="card-subtitle mb-2 text-muted">83</h6>
                                                        </div>
                                                    </div>
                                                </div> */}
                        <div className="card-outer col-3">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">task apporved</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                83
                              </h6>
                            </div>
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
