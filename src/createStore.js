import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';

const logger = createLogger({
  collapsed: true
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function create() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
}
