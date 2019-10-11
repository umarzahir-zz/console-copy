import axios from "axios";
import { LOGIN, SIGNUP } from "../actions/types.js";

export const login = () => (dispatch) => {
    axios.get('https://ivol-server.herokuapp.com/api/test')
    .then(res =>{
        dispatch({
            type: LOGIN,
            payload: res
        }
    )   
    } 
     )
}

export const signup = () => (dispatch) => {
    axios.get('https://ivol-server.herokuapp.com/api/test')
    .then(res => res.json())
    .then(data => dispatch(
        {
            type: SIGNUP,
            payload: data
        }
    ))
}