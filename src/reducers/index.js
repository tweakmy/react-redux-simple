import { combineReducers } from 'redux';

// Import the various reducers here:
import box from './movebox';


const rootReducer = combineReducers({
  // Apply all of the reducers here.
  box,

});

export default rootReducer;
