import React, {Component}  from "react";
import  Navigation from "../../components/Navigation/index.js";

export default class ManageAdmin extends Component{

    render(){
        return(
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <aside>
                            <Navigation/> 
                        </aside>
                        <article>       
                            <div className="content">
                                <div className="dashboard">
                                    <div className="page_title">
                                        <h1>manage admin</h1>
                                    </div>

                                    <div className="center-content">
                                            <div className="opportunity-form col-12 p-0">
                                                <div className="row">
                                                    <div className="col-6">
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
                                                        <input className="form-control" type="text" placeholder="User name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>user email</label>
                                                        <input className="form-control" type="email" placeholder="User email"/>
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
                                                
                                                    <button className="btn btn-primary gray-button">add admin</button>
                                                </form>
                                                    </div>
                                                    <div className=" col-6">
                                                        <div className="result">
                                                        <div className="nofound col-12 p-0">
                                                            <h3>No admin found</h3>
                                                        </div>
                                                        </div>
                                                        {/* <ul>
                                                            <li>
                                                                <p>Admin</p>
                                                            </li>
                                                        </ul> */}
                                                        
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
        )
    }
}