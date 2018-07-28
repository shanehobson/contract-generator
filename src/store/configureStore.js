import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import defaultReducer from '../reducers/placeholder';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      placeholder: defaultReducer
    })
  );

  return store;
};
