import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import search from '../../../api/search';

export function* searchForResults(action) {
  const { query } = action;
  const results = yield call(search, query);
  if (!results.error) {
    yield put({ type: 'SEARCH_RESULTS_COMPLETE', payload: results, query, isFetching: false });
    yield put({ type: 'CLEAR_SEARCH' });
  } else {
    yield put({ type: 'SEARCH_REQUEST_FAILED', payload: results, isFetching: false });
  }
}

export function* watchSearchForResults() {
  yield* takeEvery('SEARCH_FOR_RESULTS', searchForResults);
}
