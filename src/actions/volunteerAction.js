import { MANAGE_VOLUNTEER } from "./types";
import axios from "axios";

export const volunteerview = () => {
    console.log("volunteer called")
    return(dispatch, getState) => {
        axios.get ('https://ivol-server.herokuapp.com/api/volunteer')
        .then(res=>{
            dispatch({
                type: MANAGE_VOLUNTEER,
                payload:res.data
            })
        })
        .catch(err=>{

        })
    }
}