import React, {Component} from 'react';
import axios from "axios";
export default class Login extends Component{
    componentDidMount(){
        axios.get('https://ivol-server.herokuapp.com/api/test')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    render(){
        return(
            <div><h1>Login</h1></div>
        )
    }
}