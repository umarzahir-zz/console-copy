import  axios  from "axios";

import { ADD_OPPORTUNITY } from "./types";

export const opportunityData = (formData) =>{

    console.log("this is the data that we are sendig to api", formData)
    return (dispatch, getState) => {
        axios.post('https://ivol-server.herokuapp.com/api/opportunity/',formData)
        .then(res => {
            console.log(res)
            dispatch({
                type:ADD_OPPORTUNITY,
                payload:res.data
            })
        }) 
        .catch(err=>{
            
        })

    }
   
}


