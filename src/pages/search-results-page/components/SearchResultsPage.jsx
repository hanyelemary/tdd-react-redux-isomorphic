import React from 'react';
import SearchResults from './SearchResults';
import NoSearchResults from './NoSearchResults';
import Spinner from './Spinner';

const SearchResultsPage = ({ results }) => {
  let component;
  if (results.isFetching) {
    component = <Spinner />;
  } else if (results.error) {
    component = (      
      <NoSearchResults 
        errorMessage={results.error}
        secondaryMessage="Search is currently unavailable."
      />        
    );
  } else if (!results.isFetching && results.payload.consultants.length === 0) {
    component = (
      <NoSearchResults
        errorMessage="No results found."
        secondaryMessage="Please try another search."  
      />
    );
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
