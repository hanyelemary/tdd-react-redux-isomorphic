import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
  const resultList = results.map(result => {
    return <SearchResult key={result.id} result={result} />;
  });

  return (
    <div id="main-container-content" className="main-container-white-box wrapping">
      {resultList}
    </div>
  );
};

SearchResults.propTypes = {
  results: React.PropTypes.array.isRequired
};

export default SearchResults;
