import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import podsReducer from './reducers/podsReducer';
import servicesReducer from './reducers/servicesReducer';
import deploymentsReducer from './reducers/deploymentsReducer';
import ingressesReducer from './reducers/ingressesReducer';
import metricsReducer from './reducers/metricsReducer';
import masterNodesReducer from './reducers/masterNodesReducer';
import workerNodesReducer from './reducers/workerNodesReducer';

//ADD REDUCERS HERE
const rootReducer = combineReducers({
  podsReducer,
  servicesReducer,
  deploymentsReducer,
  ingressesReducer,
  metricsReducer,
  masterNodesReducer,
  workerNodesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Apply redux-thunk middleware. This gives passes the `dispatch` function as an argument to returned functions.
);

export default store;
