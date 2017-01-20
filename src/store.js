import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from './reducers';
import createLogger from 'redux-logger';

const logger = createLogger(); 
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    logger,
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancers)
  );

  // Extensions
  // store.runSaga = sagaMiddleware.run;
  // store.asyncReducers = {}; // Async reducer registry
  return {
    ...store,
    runSaga: sagaMiddleware.run,
    close() { store.dispatch(END); }
  };
}
