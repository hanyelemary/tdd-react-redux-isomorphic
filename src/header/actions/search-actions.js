export const searchWithQuery = (query, hits) => ({
  type: 'AUTOCOMPLETE_SEARCH',
  query,
  hits
});

export const searchResultsForQuery = (query, hits) => ({
  type: 'SEARCH_FOR_RESULTS',
  query,
  hits
});