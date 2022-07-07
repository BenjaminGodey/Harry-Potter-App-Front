import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../../src/reducers';
import debugMiddleWare from '/Users/benjamingodey/Desktop/Code/hp/src/middlewares/debug.js';
import apiMiddleWare from '../../src/middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(apiMiddleWare, debugMiddleWare)),
);

export default store;
