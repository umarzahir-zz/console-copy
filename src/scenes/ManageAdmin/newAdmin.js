import React, { Component } from 'react'

export default class newAdmin extends Component {
    state={name: null, email: null, rollType: null, agency: null}
    render() {
        return (
           
                <div className="container  mt-5  ">
                    <div className="row  justify-content-center mx-auto">
                      <div className="col-6">
                        <div >
                          <form className="data-form">
                            {/* <div className="form-group profile-pic d-flex flex-wrap">
                                                        <label>user name</label>
                                                        <span className="profilepic-outer">
                                                            <img src={require('../../images/user.png')} />
                                                        </span>
                                                        <button className="btn btn-primary gray-button">upload</button>
                                                    </div> */}
                            <div className="form-group">
                              <label>user name</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="User name"
                              />
                            </div>
                            <div className="form-group">
                              <label>user email</label>
                              <input
                                className="form-control"
                                type="email"
                                placeholder="User email"
                              />
                            </div>
                            <div className="form-group">
                              <label>role type</label>
                              <select className="form-control">
                                <option>Beginner</option>
                                <option>Expert</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>agency</label>
                              <select className="form-control">
                                <option>Beginner</option>
                                <option>Expert</option>
                              </select>
                            </div>

                            <button className="btn btn-primary gray-button">
                              add admin
                            </button>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                 
            
        )
    }
}
