import { combineReducers } from "redux";
import { userReducer } from './userReducer.js'
import { opportunityReducer } from './opportunityReducer.js'

export const rootReducer = combineReducers({
    user: userReducer,
    opportunity: opportunityReducer

})