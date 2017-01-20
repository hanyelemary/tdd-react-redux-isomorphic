import { Map } from 'immutable';

const STARTING_PAGE = 0;
const defaultState = Map({
  payload: { consultants: [] },
  query: '',
  isFetching: true
});

export const searchResultsForQuery = (state = defaultState, action) => {
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
          consultants: []          
        },
        error: action.payload.error,
        query: action.query,
        isFetching: action.isFetching
      });
    default:
      return state;
  }
};