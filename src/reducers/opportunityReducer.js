import { FETCH_OPPORTUNITIES } from "../actions/types.js";

const initialState = {
    opportunities: null,

    opportunityName: "",
    opportunityLevel: "",
    peopleRequired: "",
    date: new Date(),
    calendar: false

}

const opportunityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OPPORTUNITIES:
            {
                console.log(action.type);
                console.log(action.payload);
                return state;
            }
        case "MANAGE_OPPORTUNITY":
            {
                console.log("data to be stored", action.payload)
                console.log(typeof (action.payload))
                return {

                    opportunities: [...action.payload],


                }

            }
        case "UPDATE_OPP": {
            return {
                opportunities: [...action.payload],
            }
        }
        default:
            return { ...state }
    } 
}
export default opportunityReducer;