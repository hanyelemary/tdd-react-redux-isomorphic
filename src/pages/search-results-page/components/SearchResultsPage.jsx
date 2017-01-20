import React from 'react';
import SearchResults from './SearchResults';
import NoSearchResults from './NoSearchResults';
import Spinner from './Spinner';

const SearchResultsPage = ({ results }) => {
  let component;
  if (results.isFetching) {
    component = <Spinner />;
  } else if (!results.isFetching && results.payload.error) {
    component = (
      <div className="ui centered padded grid">
        <div id="no-results-container">
          <h2>{results.payload.error}</h2>
          <hr />
          <div id="no-results-suggest"><i>Search is currently unavailable.</i></div>
        </div>
      </div>
    );
  } else if (!results.isFetching && results.payload.consultants.length === 0) {
    component = (
      <div className="ui centered padded grid">
        <NoSearchResults />
      </div>);
  } else {
    component = (
      <div className="ui centered grid">
        <div className="fourteen wide computer sixteen wide mobile fourteen wide tablet column">
          <SearchResults results={results.payload.consultants} query={results.query} />
        </div>
      </div>
    );
  }

  return component;
};

SearchResultsPage.propTypes = {
  results: React.PropTypes.object.isRequired
};

export default SearchResultsPage;
