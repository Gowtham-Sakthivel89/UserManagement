import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import todoReducer from './todoReducer';

const appReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  todos: todoReducer
});


const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;