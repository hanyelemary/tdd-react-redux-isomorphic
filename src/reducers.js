import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { searchWithQuery } from './header/reducers/autocomplete-reducer';
import { searchResultsForQuery } from './pages/search-results-page/reducers/search-results-reducer';
import pageHeaderReducer from './header/reducers/page-header-reducer';

export default combineReducers({
  routing: routerReducer,
  pageHeader: pageHeaderReducer,
  searchResults: searchWithQuery,
  resultsForQuery: searchResultsForQuery
});
