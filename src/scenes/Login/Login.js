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
                <h1>Login</h1>      
                <div className=''>Not a Member yet? <Link className="link" to="/register"><b><u>Sign up</u></b></Link></div>                  
            </div>
            <form className="col-12 form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-footer w-100 d-flex">
                    <Link type="submit" to='/' className="btn btn-primary form-button">Login</Link>
                    <Link type="submit" to='/forgotpassword' className='text-secondary'>Forgot Password?</Link>
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