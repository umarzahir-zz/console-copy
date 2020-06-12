import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password1: '',
            password2: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.value)
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
                        <input type="password" name="password1" onChange={this.handleChange} className="form-control" id="password1" />
                        <label htmlFor="password2">Repeat Password</label>
                        <input type="password" className="form-control" onchange={this.handleChange} id="password2" />
                    </div>
                    <div className="form-footer w-100 d-flex">
                    <Link type="submit" to='/login' className="btn btn-primary form-button">Submit</Link>
                    </div>
                </form>    
                </div>
            </div>
        )
    }
}