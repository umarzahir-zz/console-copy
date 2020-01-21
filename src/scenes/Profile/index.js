import React, {Component}  from "react";
import  Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons'
export default class Profile extends Component{

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
                                        <h1>user profile</h1>
                                    </div>

                                    <div className="center-content">
                                        <div className="opportunity-form col-12 p-0">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="profile">
                                                    <div class="card">
                                                        <img className="card-img-top" src={require("../../images/user.png")} alt=""/>
                                                        <div class="card-body">
                                                            <h5 class="card-title">Muhammad salis</h5>
                                                            <p>Admin</p>
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item"><FontAwesomeIcon className="pro-icon" icon={faPhone}/> <span>0316 23564789</span></li>
                                                            <li class="list-group-item"><FontAwesomeIcon className="pro-icon" icon={faEnvelope}/> <span>aaa@gmail.com</span></li>
                                                            <li class="list-group-item"><FontAwesomeIcon className="pro-icon" icon={faMapMarker}/> <span>islamabad</span></li>
                                                        </ul>
                                                        <div class="card-body">
                                                            <h5 class="card-title">Account type</h5>
                                                            <p><FontAwesomeIcon className="pro-icon" icon={faUser}/>  <span>Super admin</span></p>
                                                        </div>
                                                        <div class="card-body">
                                                            <h5 class="card-title">desciption</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
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
        )
    }
}