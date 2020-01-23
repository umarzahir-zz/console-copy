import axios from "axios";

import { ADD_OPPORTUNITY } from "./types";
import { MANAGE_OPPORTUNITY } from './types';
export const opportunityData = (formData) => {

    // console.log("this is the data that we are sendig to api", formData)
    return (dispatch, getState) => {
        axios.post('https://ivol-server.herokuapp.com/api/opportunity/', formData)
            .then(res => {

                dispatch({
                    type: ADD_OPPORTUNITY,
                    payload: res.data
                })
            })
            .catch(err => {

            })

    }

}

export const manageOpportunity = () => {
    return (dispatch) => {
        axios.get('https://ivol-server.herokuapp.com/api/opportunity')
            .then(res => {
                console.log('response of manage oppotunites', res)
                dispatch({
                    type: MANAGE_OPPORTUNITY,
                    payload: res.data
                })
            })
            .catch({

            })
    }

}


