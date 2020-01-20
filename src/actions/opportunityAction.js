import  axios  from "axios";

import { ADD_OPPORTUNITY } from "./types";

export const opportunityData = (dispatch) =>{
    axios.post('https://ivol-server.herokuapp.com/api/opportunity/create')
    .then(
        dispatch({
            type:ADD_OPPORTUNITY,
            payload:res.data
        })
    )
    .catch(err=>{
        
    })
}