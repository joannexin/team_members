import { combineReducers } from 'redux';
import MembersReducer from './reducer_members';
import ActiveMemberReducer from './reducer_active_member';

const rootReducer = combineReducers({
  members: MembersReducer,
  activeMember: ActiveMemberReducer
});

export default rootReducer;
