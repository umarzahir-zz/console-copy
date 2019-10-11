import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux";
import { login } from "../../actions/userActions.js";
class Login extends Component{
    componentDidMount(){
        this.props.login();
    }
    render(){
        return(
            <div><h1>Login</h1></div>
        )
    }
}

// const mapStateToProps = () => {
// }

postMessage.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login);