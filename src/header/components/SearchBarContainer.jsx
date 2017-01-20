import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Map } from 'immutable';
import { searchWithQuery, searchResultsForQuery } from '../actions/search-actions';
import SearchBar from './SearchBar';
import AutocompleteResultsList from './AutocompleteResultsList';

const ENTER = 13;
const HITS_PER_PAGE = 8;

class SearchBarContainer extends React.Component {
  handleValueChange = (e) => {
    const query = e.target.value;
    return this.props.searchWithQuery(query, HITS_PER_PAGE);
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case ENTER:
        this.handleEnter(event);
        break;
      default:
        break;
    }
  }

  handleEnter = (event) => {
    const { searchResults } = this.props;
    const results = searchResults.toJS();
    const query = event.target.value;
    if (query.trim() !== '') {
      this.performSearch(query);
    }
  }

  performSearch(query) {
    this.props.searchResultsForQuery(query, HITS_PER_PAGE);
    browserHistory.push(`/search/${query}`);
  }

  render() {
    const { searchResults, query } = this.props;
    const results = searchResults.toJS();
    return (
      <section>
        <SearchBar
          handleKeyDown={this.handleKeyDown}
          handleValueChange={this.handleValueChange}
          handleSearch={this.performSearch}
          searchResults={results}
          query={results.query}
        />
        <div className="results">
          <AutocompleteResultsList
            searchResults={results}
            href={`/search/${results.query}`}
          />
        </div>
      </section>
    );
  }
}

SearchBarContainer.propTypes = {
  searchResults: React.PropTypes.instanceOf(Map).isRequired,
  handleSearch: React.PropTypes.func,
  searchWithQuery: React.PropTypes.func.isRequired,
  searchResultsForQuery: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults
  };
};

export default connect(mapStateToProps, { searchWithQuery, searchResultsForQuery })(SearchBarContainer);
