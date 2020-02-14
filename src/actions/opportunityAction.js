import axios from "axios";

import { ADD_OPPORTUNITY } from "./types";
import { MANAGE_OPPORTUNITY } from './types';
export const opportunityData = (formData) => {

     console.log("this is the data that we are sendig to api", formData)
     const data = new FormData();
     console.log(formData.file)
     data.append('file', formData.file.files[0])
     data.append('title', formData.title)
     let another = [...data]
     another = another[0];
     console.log(another);
     
    return (dispatch, getState) => {
<<<<<<< HEAD
        axios.post('http://localhost:5000/api/opportunity/create', another, {
            headers: {
             'accept': 'application/json',
             'Accept-Language': 'en-US,en;q=0.8',
             'Content-Type': `multipart/form-data`,
            }
           })
            .then(res => {
                console.log('inside then case', ...data)
=======
        axios.post('http://localhost:5000/api/opportunity/', formData)
            .then(res => {
>>>>>>> dev
                dispatch({
                    type: ADD_OPPORTUNITY,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const manageOpportunity = () => {
    return (dispatch) => {
        axios.get('https://ivol-server.herokuapp.com/api/opportunity')
            .then(res => {
                dispatch({
                    type: MANAGE_OPPORTUNITY,
                    payload: res.data
                })
            })
            .catch({

            })
    }

}

export const deleteOpportunity = (id) => {
    console.log(id)
    return (dispatch, getState) => {
        axios.delete('https://ivol-server.herokuapp.com/api/opportunity/delete/' + id)
            .then(res => {
                axios.get('https://ivol-server.herokuapp.com/api/opportunity')
                    .then(res => {
                        dispatch({ type: "UPDATE_OPP", payload: res.data })
                    })
            }).catch(err => {
                console.log(err)
            })
    }

}


