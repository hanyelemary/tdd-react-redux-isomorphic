import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import SearchResultsPageContainer from './pages/search-results-page/components/SearchResultsPageContainer';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/search/:query" component={SearchResultsPageContainer} />
    </Route>
  );
};
