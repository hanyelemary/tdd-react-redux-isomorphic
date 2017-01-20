import React from 'react';
import { connect } from 'react-redux';
import { searchResultsForQuery } from '../../../header/actions/search-actions';
import SearchResultsPage from './SearchResultsPage';

const RESULTS_PER_PAGE = 20;
class SearchResultsPageContainer extends React.Component {
  componentDidMount() {
    const { query } = this.props.params;
    this.props.searchResultsForQuery(query, RESULTS_PER_PAGE);
  }

  render() {
    const { results } = this.props;
    return (
      <SearchResultsPage results={results} />
    );
  }
}

SearchResultsPageContainer.propTypes = {
  params: React.PropTypes.object.isRequired,
  searchResultsForQuery: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  results: state.resultsForQuery.toJS()
});

export default connect(mapStateToProps, { searchResultsForQuery })(SearchResultsPageContainer);
