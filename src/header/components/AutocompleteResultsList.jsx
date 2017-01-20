import React from 'react';
import AutocompleteResult from './AutocompleteResult';
import AutocompleteResultsFooter from './AutocompleteResultsFooter';

const AutocompleteResultsList = ({ searchResults, href }) => {
  const EMPTY_ARRAY = 0;
  const results = searchResults;
  const resultHref = (type, id) => {
    return `/${type}s/${id}`;
  };

  if (results.payload.consultants !== undefined &&
    results.payload.consultants.length !== EMPTY_ARRAY) {
    return (
      <div className="autocomplete-results-container">
        {
          results.payload.consultants.map(result => {
            return (
              <AutocompleteResult
                key={result.id}
                content={result}
                hrefForResult={resultHref(result.type, result.id)}
              />
            );
          })
        }
        <AutocompleteResultsFooter
          numResults={results.payload.consultants.length}
          query={results.query}
          href={href}
        />
      </div>
    );
  }
  return null;
};

AutocompleteResultsList.propTypes = {
  searchResults: React.PropTypes.object.isRequired,
  href: React.PropTypes.string.isRequired
};

export default AutocompleteResultsList;
