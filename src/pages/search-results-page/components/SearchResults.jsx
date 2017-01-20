import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ results }) => {
  const resultList = results.map(result => {
    return <SearchResult key={result.id} result={result} />;
  });

  return (
    <div className="ui centered grid">
      <div className="fourteen wide computer sixteen wide mobile fourteen wide tablet column">
        <div id="main-container-content" className="main-container-white-box wrapping">
          {resultList}
        </div>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  results: React.PropTypes.array.isRequired
};

export default SearchResults;
