import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Alert } from 'reactstrap';

// import { Link } from "react-router-dom";
import { adminSignup } from '../../actions/adminAction'
class Register extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

        this.state = { 
            name: '',
            email: '',
            password: '', 
            confirmPassword: '', 
            imageUrl: null,
            imageData: null,
            error: ''
        }
    }

    
    handleSignup = (event) => {
        console.log("signup event", event)
        const { password, confirmPassword} = this.state;
        if(password !== confirmPassword)
        {
            this.setState({
                error: "The Passwords do not match!"
            })
            //alert("The Passwords Dont Match. Please Try again!")
            event.preventDefault();
        }
        else {
            this.setState({
                error: ""
            })
            this.props.signup(this.state)
        }
        
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    onDismiss = () => {
        this.setState({ visible: false })
    }
    onChange = (e) => {
        let files = e.target.files;
        console.log(files);
        console.log("Image data", e.target.files[0])
        const tempUrl = URL.createObjectURL(e.target.files[0])
        this.setState({ imageData: e.target, imageUrl: tempUrl });
    }
    render() {
        return (
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                    <div className="">
                        <h1>New Agency Account</h1>
                    </div>
                    <form onSubmit={this.handleSubmit} className="col-12 form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onChange={this.handleChange} name="name" value={this.state.name} type="text" className="form-control" id="name" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input onChange={this.handleChange} name="email" value={this.state.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password1">Password</label>
                            <input onChange={this.handleChange} name="password" type="password" value={this.state.password} className="form-control" id="password1" required/>
                            <p className="text-danger font-weight-bold">{this.state.error}</p>
                            <label htmlFor="password2">Repeat Password</label>
                            <input onChange={this.handleChange} name="confirmPassword" type="password" value={this.state.confirmPassword} className="form-control" id="password2" required/>
                            <label>Upload Image</label>

                            <input type="file" name="image" accept="image/*" onChange={this.onChange} required/>
                            {this.state.imageUrl ? <img style={{width: "70%", paddingTop: 10}} src={this.state.imageUrl} alt="" /> : <img src={this.state.imageSrc} alt="" />}
                        </div>                        
                        <div className="form-footer w-100 d-flex">

                            <Alert color="info" isOpen={this.props.visible} toggle={this.onDismiss}>
                                {this.props.signupMessage}
                            </Alert>


                            <button type="submit" onClick={this.handleSignup} >
                                {this.props.signupState ? "Loading" : "SignUp"}
                            </button>
                            {/* <Link type="submit" to='/login' className="btn btn-primary form-button">Submit</Link> */}
                        </div>
                    </form>
                </div>
            </div>
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