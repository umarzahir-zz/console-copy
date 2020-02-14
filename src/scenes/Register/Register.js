import React, {Component} from 'react';
import { Link } from "react-router-dom";
export default class Register extends Component{
    render(){
        return(
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                <div className="">
                    <h1>New Admin Account</h1>
                </div>
                <form className="col-12 form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" className="form-control" id="password1" />
                        <label htmlFor="password2">Repeat Password</label>
                        <input type="password" className="form-control" id="password2" />
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