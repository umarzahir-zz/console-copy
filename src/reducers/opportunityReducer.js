import { FETCH_OPPORTUNITIES } from "../actions/types.js";

const initialState = {
    opportunities: [],
    opportunity: {}
}

export const opportunityReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_OPPORTUNITIES:
            {
                console.log(action.type);
                console.log(action.payload);
                return state;
            }
        default:
            return state;
    }
}