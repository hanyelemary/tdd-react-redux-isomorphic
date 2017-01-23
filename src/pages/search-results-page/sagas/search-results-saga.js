import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import search from '../../../api/search';

export function* searchForResults(action) {  
  try {
    const { query } = action;
    const results = yield call(search, query);
    yield put({ 
      type: 'SEARCH_RESULTS_COMPLETE', payload: results, query, isFetching: false 
    });
    //Reset the search box after we get results.
    yield put({ type: 'RESET_SEARCH' });
  } catch (ex) {
    yield put({ 
      type: 'SEARCH_REQUEST_FAILED', payload: ex.message, isFetching: false
    });
  }
}

export function* watchSearchForResults() {
  yield takeEvery('SEARCH_FOR_RESULTS', searchForResults);
}
