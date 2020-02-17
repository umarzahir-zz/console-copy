import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import opportunityReducer from './opportunityReducer';
import vol from './volunteerReducer'
import admin from './adminReducer'

export default combineReducers({
  opportunity: opportunityReducer,
  error: errorReducer,
  auth: authReducer,
  vol: vol,
  admin: admin
});
