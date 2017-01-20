import { fork } from 'redux-saga/effects';
import { watchSearchForResults } from './pages/search-results-page/sagas/search-results-saga';
import { watchAutocompleteSearch } from './header/sagas/autocomplete-saga';

export default function* rootSaga() {
  yield [
    fork(watchAutocompleteSearch),
    fork(watchSearchForResults)
  ];
}
