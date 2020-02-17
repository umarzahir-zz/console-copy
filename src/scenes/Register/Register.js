import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Alert } from 'reactstrap';

// import { Link } from "react-router-dom";
import { adminSignup } from '../../actions/adminAction'
class Register extends Component {


    state = { email: '', password: '', confirmPassword: '', }
    handleSignup = (event) => {
        console.log("signup event".event)
        this.props.signup(this.state)
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onDismiss = () => {
        this.setState({ visible: false })
    }
    render() {


        return (
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                    <div className="">
                        <h1>New Admin Account</h1>
                    </div>
                    {/* <form className="col-12 form"> */}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input onChange={this.handleChange} name="password" type="password" className="form-control" id="password1" />
                        <label htmlFor="password2">Repeat Password</label>
                        <input onChange={this.handleChange} name="confirmPassword" type="password" className="form-control" id="password2" />
                    </div>
                    <div className="form-footer w-100 d-flex">

                        < Alert color="info" isOpen={this.props.visible} toggle={this.onDismiss}>
                            {this.props.signupMessage}
                        </Alert>


                        <button onClick={this.handleSignup} >
                            {this.props.signupState ? "Loading" : "SignUp"}
                        </button>
                        {/* <Link type="submit" to='/login' className="btn btn-primary form-button">Submit</Link> */}
                    </div>
                    {/* </form> */}
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        signupState: state.admin.adminSignupStaus,
        signupMessage: state.admin.adminSignupMessage,
        visible: state.admin.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signup: (data) => { dispatch(adminSignup(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)