import { LOGIN, SIGNUP } from '../actions/types.js';

const initialState = {
    items: [],
    item: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            {
                console.log(action.type);
                console.log(action.payload);
                return state;
            }
        case SIGNUP: 
        {
            console.log(action.type);
            console.log(action.payload);
            return state;
        }
        default:
            return state;
    }
}