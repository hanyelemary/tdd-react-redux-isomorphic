import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import getRoutes from './routes';
import configureStore from './store';
import rootSaga from './sagas';

// Add the reducer to your store on the `routing` key
// http://redux.js.org/docs/api/combineReducers.html

const initialState = JSON.parse(window.__INITIAL_STATE__);
/* eslint no-param-reassign: ["off"] */

const immutifiedState = Object.keys(initialState).reduce((accumulator, data) => {
  accumulator[data] = fromJS(initialState[data]);
  return accumulator;
}, {});

const store = configureStore(immutifiedState, browserHistory);
store.runSaga(rootSaga);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const component = (
  <Router history={history}>
    {getRoutes()}
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('app')
);
