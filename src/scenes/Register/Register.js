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
            email: '',
            password: '',
            confirmPassword: '',
            imageUrl: null,
            selectedFile: null
        }
    }


    handleSignup = (event) => {
        event.preventDefault()
        console.log("signup event".event)
        this.props.signup(this.state)
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onDismiss = () => {
        this.setState({ visible: false })
    }
    onChange(e) {
        const tempUrl = URL.createObjectURL(e.target.files[0])
        this.setState({ selectedFile: e.target.files[0], imageUrl: tempUrl })
        console.log("image upload", e.target.files[0])
    }
    render() {
        return (
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                    <div className="">
                        <h1>New Agency Account</h1>
                    </div>
                    <form className="col-12 form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input onChange={this.handleChange} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password1">Password</label>
                            <input onChange={this.handleChange} name="password" type="password" className="form-control" id="password1" />
                            <label htmlFor="password2">Repeat Password</label>
                            <input onChange={this.handleChange} name="confirmPassword" type="password" className="form-control" id="password2" />
                            <label>Upload Image</label>

                            {/* <input type="file" name='image' accept="image/*" onChange={this.handleImage} ></input> */}

                            <input type="file" name="fileData" accept="image/*" onChange={(e) => this.onChange(e)} />
                            {this.state.imageUrl ? <img style={{ width: "70%", paddingTop: 10 }} src={this.state.imageUrl} alt="" /> : <img src={this.state.imageSrc} alt="" />}
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
                    </form>
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