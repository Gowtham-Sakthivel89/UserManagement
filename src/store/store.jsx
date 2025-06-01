import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  

import rootReducer from './reducers/rootReducer';


const reduxLogger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const middleware = [thunk];  
if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;