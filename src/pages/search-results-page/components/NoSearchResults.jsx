import React from 'react';
const NoSearchResults = () => {
  return (
    <div className="ui centered padded grid">
      <div className="no-results-container">
        <h2 className="no-results-text">No Results Found</h2>
        <hr />
        <div className="no-results-suggest"><i>Please try another search</i></div>
      </div>
    </div>
  );
};

export default NoSearchResults;
