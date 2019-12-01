import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';


import rootReducer from './root-reducer';
import { nodeInternals } from 'stack-utils';

const middlewares = []; 

if (process.env.NODE_ENV === 'development') {
    middlewares.push('logger');
}

// putting it into array and spreading it into applyMiddleware below so it can be more scalable in the future - will just need to put in new method into array for scaling up.

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

