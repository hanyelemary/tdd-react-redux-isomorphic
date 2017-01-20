import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import search from '../../api/search';

export function* autocompleteSearch(action) {
  const { query } = action;
  if (query === '') {
    yield put({ type: 'AUTOCOMPLETE_SEARCH_COMPLETE', payload: {}, query });
  } else {
    const results = yield call(search, query);
    yield put({ type: 'AUTOCOMPLETE_SEARCH_COMPLETE', payload: results, query });
  }
}

export function* watchAutocompleteSearch() {
  yield* takeLatest('AUTOCOMPLETE_SEARCH', autocompleteSearch);
}

