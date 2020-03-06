import React, {Component} from 'react';
import { Link } from "react-router-dom";
export default class ForgotPassword extends Component{
    render(){
        return(
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                <div className="">
                    <h1 className="text-center">Forgot Password</h1>
                </div>
                <form className="col-12 form">
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-footer w-100 d-flex">
                    <Link type="submit" to='/newmsg' className="btn btn-primary form-button">Submit</Link>
                    <Link type="submit" to='/newcredentials' className="btn btn-primary form-button">Credentials</Link>
                    </div>
                </form>    
                </div>
            </div>
        )
    }
}