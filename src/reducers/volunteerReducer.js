import { MANAGE_VOLUNTEER } from "../../src/actions/types";

const initialState = { allVoluntear: null}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case MANAGE_VOLUNTEER: {
            console.log("data revicd",action.payload    )
            return {
                ...state,
                allVoluntear: action.payload
            }
        }
        default:{
            return{
                ...state
            }
            
        }
    }
}