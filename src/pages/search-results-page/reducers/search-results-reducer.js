import { Map } from 'immutable';

const STARTING_PAGE = 0;
const defaultResultState = Map({
  payload: { resultContent: [], totalResultCount: 0, page: STARTING_PAGE },
  query: '',
  isFetching: true
});

export const searchResultsForQuery = (state = defaultResultState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS_COMPLETE':
      return Map({
        payload: action.payload,
        query: action.query,
        isFetching: false
      });
    case 'SEARCH_REQUEST_FAILED':
      return Map({
        payload: {
          resultContent: [],
          totalResultCount: 0,
          page: STARTING_PAGE,
          error: action.payload.error
        },
        query: action.query,
        error: action.error,
        isFetching: action.isFetching
      });
    default:
      return state;
  }
};