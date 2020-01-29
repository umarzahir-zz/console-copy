import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux";
import { login } from "../../actions/userActions";
import { Link } from "react-router-dom";
class Login extends Component{
    componentDidMount(){
        // this.props.login();
    }
    render(){
        return(
            <div className="d-flex m-auto form-container text-left flex-wrap">
            <div className="w-100">
            <div className="d-flex align-items-center justify-content-between">
                <h1>Sign In</h1>      
                <div className=''>Not a Member? <Link className="link" to="/register"><b>Sign up</b></Link></div>                  
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
                    <Link className="link" to="/">Login</Link>
                    </div> 
            </form>    
            </div>
        </div>
        )
    }
}

// const mapStateToProps = () => {
// }

postMessage.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login);