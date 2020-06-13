import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {
            password1: '',
            password2: '',
            error: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    handleSignup = (event) => {
        console.log("signup event", event)
        const { password1, password2} = this.state;
        if(password1 !== password2)
        {
            console.log("Passwords not matching");
            this.setState({
                error: "The Passwords do not match!"
            });
            event.preventDefault();
        }
        else {
            this.setState({
                error: ""
            });
        }
        
    }
    render() {
        
        return (
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                <div className="">
                    <h1 className="text-middle">Enter new Password</h1>
                </div>
                <form className="col-12 form">
                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" onChange={this.handleChange} className="form-control" id="password1" required/>
                        <p className="text-danger font-weight-bold">{this.state.error}</p>
                        <label htmlFor="password2">Repeat Password</label>
                        <input type="password" name="password2" onChange={this.handleChange} className="form-control" id="password2" required/>
                    </div>
                    <div className="form-footer w-100 d-flex">
                    
                    <button type="submit" className="btn btn-primary form-button" onClick={this.handleSignup} >Submit</button>
                    </div>
                </form>    
                </div>
            </div>
        )
    }
}