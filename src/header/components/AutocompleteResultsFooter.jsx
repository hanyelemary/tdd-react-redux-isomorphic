import React from 'react';

const AutocompleteResultsFooter = ({ numResults, href }) => {
  return (
    <div className="autocomplete-results-footer">
      <a className="search-link" href={href}>See All ({numResults}) Results</a>
    </div>
  );
};

AutocompleteResultsFooter.propTypes = {
  numResults: React.PropTypes.number.isRequired,
  href: React.PropTypes.string.isRequired
};

export default AutocompleteResultsFooter;
