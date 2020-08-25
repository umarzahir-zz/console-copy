import { MANAGE_VOLUNTEER } from "./types";
import axios from "axios";
const Heroku = "https://ivol-server.herokuapp.com/";
const Local = "http://localhost:5000/";
export const volunteerview = () => {
    console.log("volunteer called")
    return(dispatch, getState) => {
        axios.get (Heroku.concat("api/volunteer"))
        .then(res=>{
            console.log("volounteer res then", res)
            dispatch({
                type: MANAGE_VOLUNTEER,
                payload:res.data
            })
        })
        .catch(err=>{
            console.log("volounter err",err)
        })
    }
}