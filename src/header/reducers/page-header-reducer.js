import { Map } from 'immutable';

const defaultState = Map({
  iconClass: 'fa fa-users',
  title: 'Consultants'
});

export default function pageHeaderReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SEARCH_RESULTS_COMPLETE':
      return Map({
        title: action.query,
        iconClass: 'fa fa-search'
      });
    default:
      return state;
  }
}
