import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ResetPassword} from '../../actions/adminAction'

 class NewPassword extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.state = {
            password1: '',
            password2: '',
            error: '',
            id: null,
            token: null
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    handleSignup = (event) => {
        event.preventDefault();
        console.log("new password submitted", this.state)
        console.log("signup event", event)
        const { password1, password2} = this.state;
        if(password1 !== password2)
        {
            console.log("Passwords not matching");
            this.setState({
                error: "The Passwords do not match!"
            });
           
        }
        else {
            this.setState({
                error: ""
            });
            this.props.resetPassword(this.state)
        }
        
    }
    componentDidMount = () => {
        console.log(`Component Did Mount.`)
        let urlParams = new URLSearchParams(window.location.search)
        console.log('id ::: ',urlParams.get('id')); 
        console.log('token :::',urlParams.get('token')); 
        this.setState({id: urlParams.get('id'), token: urlParams.get('token')  })
    }
    render() {
        
        return (
            <div className="d-flex m-auto form-container text-left flex-wrap">
                <div className="w-100">
                <div className="">
                    <h1 className="text-middle">Enter new Password</h1>
                </div>
                <form onSubmit={this.handleSignup} className="col-12 form">
                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" onChange={this.handleChange} className="form-control" id="password1" required/>
                        <p className="text-danger font-weight-bold">{this.state.error}</p>
                        <label htmlFor="password2">Repeat Password</label>
                        <input type="password" name="password2" onChange={this.handleChange} className="form-control" id="password2" required/>
                    </div>
                    <div className="form-footer w-100 d-flex">
                    
                    <button type="submit" className="btn btn-primary form-button" >Submit</button>
                    </div>
                </form>    
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        resetPassword: (data) => dispatch(ResetPassword(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPassword)