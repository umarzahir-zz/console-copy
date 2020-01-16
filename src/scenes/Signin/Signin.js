import React, {Component} from 'react';
import { Link } from "react-router-dom";
export default class Signin extends Component{
    render(){
        return(
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                <div className="">
                    <h1>Sign-up</h1>
                </div>
                <form className="col-12 form">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-footer w-100 d-flex">
                    <button type="submit" className="btn btn-primary form-button">Submit</button>
                    <Link className="link" to="/login">Login</Link>
                    </div>
                </form>    
                </div>
            </div>
        )
    }
}