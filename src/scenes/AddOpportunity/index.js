import React, {Component}  from "react";
import  Navigation from "../../components/Navigation/index.js";

export default class AddOpportunity extends Component{

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
                                        <h1>manage opportunity</h1>
                                    </div>

                                    <div className="center-content">
                                       
                                   
                                            <div className="opportunity-form col-12 p-0">
                                                <form className="col-6 data-form">
                                                    <div className="form-group profile-pic d-flex flex-wrap">
                                                        <label>opportunity image</label>
                                                        <span className="profilepic-outer">
                                                            <img src={require('../../images/user.png')} />
                                                        </span>
                                                        <button className="btn btn-primary gray-button">upload</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Opportunity Name</label>
                                                        <input className="form-control" placeholder="Oppotunity name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Opportunity Level</label>
                                                        <select className="form-control">
                                                            <option>Beginner</option>
                                                            <option>Expert</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>people required</label>
                                                        <input className="form-control" placeholder="People required"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Opportunity Start Date</label>
                                                        <input className="form-control" placeholder="dd/mm/yyyy"/>
                                                    </div>
                                                    <button className="btn btn-primary gray-button">Add Opportunity</button>
                                                </form>
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