import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; 

// putting it into array and spreading it into applyMiddleware below so it can be more scalable in the future - will just need to put in new method into array for scaling up.

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;