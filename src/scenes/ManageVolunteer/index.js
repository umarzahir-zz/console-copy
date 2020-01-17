import React, {Component}  from "react";
import  Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
export default class ManageVolunteer extends Component{

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
                                        <h1>manage volunteer</h1>
                                    </div>

                                    <div className="center-content">
                                            <div className="opportunity-form col-12 p-0">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <form className="data-form">
                                                    <div className="form-group profile-pic d-flex flex-wrap">
                                                        <label>volunteer images</label>
                                                        <span className="profilepic-outer">
                                                            <img src={require('../../images/user.png')} />
                                                        </span>
                                                        <button className="btn btn-primary gray-button">upload</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>first name</label>
                                                        <input className="form-control" type="text" placeholder="First name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>last name</label>
                                                        <input className="form-control" type="text" placeholder="Last name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>email</label>
                                                        <input className="form-control" type="email" placeholder="email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>password</label>
                                                        <input className="form-control" type="text" placeholder="Password"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>descrition</label>
                                                        <textarea className="form-control" placeholder="descrition" rows="5">

                                                        </textarea>
                                                       
                                                    </div>
                                                    <button className="btn btn-primary gray-button">add volunteer</button>
                                                </form>
                                                    </div>
                                                    <div className=" col-6">
                                                        <div className="result">
                                                            <ul className="list-group result-list">
                                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                    <p className="list-title">Ali</p>
                                                                    <div className="list-button">
                                                                        <button className="btn btn-primary gray-button">
                                                                            <FontAwesomeIcon icon={faPen} />
                                                                        </button>
                                                                        <button className="btn btn-primary gray-button">
                                                                            <FontAwesomeIcon icon={faTrash}/>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                    <p className="list-title">Zarar</p>
                                                                    <div className="list-button">
                                                                        <button className="btn btn-primary gray-button">
                                                                            <FontAwesomeIcon icon={faPen} />
                                                                        </button>
                                                                        <button className="btn btn-primary gray-button">
                                                                            <FontAwesomeIcon icon={faTrash}/>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                    <p className="list-title">Salis</p>
                                                                    <div className="list-button">
                                                                        <button className="btn btn-primary gray-button">
                                                                            <FontAwesomeIcon icon={faPen} />
                                                                        </button>
                                                                        <button className="btn btn-primary gray-button">
                                                                            <FontAwesomeIcon icon={faTrash}/>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                               
                                                            </ul>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination custom-pagination">
                                                                    <li className="page-item"><a class="page-link gray-button" href="#">Previous</a></li>
                                                                    <li className="page-item"><a class="page-link gray-button" href="#">1</a></li>
                                                                    <li className="page-item"><a class="page-link gray-button" href="#">2</a></li>
                                                                    <li className="page-item"><a class="page-link gray-button" href="#">3</a></li>
                                                                    <li className="page-item"><a class="page-link gray-button" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        {/* <div className="nofound col-12 p-0">
                                                            <h3>No admin found</h3>
                                                        </div> */}
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