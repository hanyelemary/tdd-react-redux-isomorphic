import { Map } from 'immutable';

const defaultState = Map({ payload: {}, query: '' });

export const searchWithQuery = (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTOCOMPLETE_SEARCH_COMPLETE':
      return Map({ payload: action.payload, query: action.query });
    case 'RESET_SEARCH':
      return Map({ payload: {}, query: '' });  
    default:
      return state;
  }
};