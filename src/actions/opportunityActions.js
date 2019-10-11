import { axios } from "axios";
import { FETCH_OPPORTUNITIES } from "../actions/types.js";

export const getOpportunity = () => (dispatch) => {
    axios.get('https://ivol-server.herokuapp.com/api/test')
    .then(res => res.json())
    .then(data => 
        dispatch({
            type: FETCH_OPPORTUNITIES,
            payload: data
        }
    ))
}
