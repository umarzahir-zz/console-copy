import React, {Component}  from "react";
import  Navigation from "../../components/Navigation/index.js";
export default class AdminDashboard extends Component{
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
                                        <h1>admin dashboard</h1>
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