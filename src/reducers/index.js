import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import repoReducer from './repo_reducer';

const rootReducer = combineReducers({
  users:userReducer,
  repos:repoReducer
});

export default rootReducer;
