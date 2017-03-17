import { combineReducers } from 'redux';
import memberReducer from './reducer_members';

const rootReducer = combineReducers({
  memberReducer
});

export default rootReducer;
