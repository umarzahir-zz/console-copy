import { FETCH_OPPORTUNITIES } from "../actions/types.js";

const initialState = {
    opportunities: [],
    opportunity: {},
    opportunityName: "",
            opportunityLevel:"",
            peopleRequired:"",
            date: new Date(),
            calendar: false

}

const opportunityReducer = (state = initialState, action) => {
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
export default opportunityReducer;