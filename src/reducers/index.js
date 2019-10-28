import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import opportunityReducer from './opportunityReducer';

export default combineReducers({
  opportunity: opportunityReducer,
  error: errorReducer,
  auth: authReducer,
});
