import React, {Component}  from "react";
import  Navigation from "../../components/Navigation/index.js";
import Calendar from 'react-calendar';
import { throwStatement } from "@babel/types";
export default class AddOpportunity extends Component{
    constructor(props){
        super(props)
        this.state = {
            opportunityName: "",
            opportunityLevel:"",
            peopleRequired:"",
            date: new Date(),
            calendar: false

        }

    }
    showCalender= ()=> {
        this.setState({calendar: true})
    }
    hideCalender= ()=> {
        this.setState({calendar: false})
    }
    opportunityNameChange = (event) => {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
        
    }
    onChange = date => this.setState({ date })
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
                                                        <input className="form-control" 
                                                        type="text" value = {this.state.opportunityName} 
                                                        placeholder="Oppotunity name"
                                                        name="opportunityName"
                                                        onChange={this.opportunityNameChange}/>
                                                        
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Opportunity Level</label>
                                                        <select className="form-control" 
                                                        name="opportunityLevel"  
                                                        value={this.state.opportunityLevel} 
                                                        onChange={this.opportunityNameChange}onChange={this.opportunityNameChange}>
                                                            <option>Beginner</option>
                                                            <option>Expert</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>people required</label>
                                                        <input className="form-control" 
                                                        placeholder="People required" 
                                                        name="peopleRequired" 
                                                        value={this.state.peopleRequired} 
                                                        onChange={this.opportunityNameChange}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Opportunity Start Date</label>
                                                        <input className="form-control" 
                                                        placeholder="dd/mm/yyy" 
                                                        name="peopleRequired" 
                                                        onClick={this.showCalender}
                                                        value={this.state.date} 
                                                        onChange={this.opportunityNameChange}/>

                                                        { this.state.calendar && <Calendar
                                                            onChange={this.onChange}
                                                            value={this.state.date}
                                                            onClickDay={this.hideCalender}
                                                            />}
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