import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import config from '../config';

const search = (query) => {
  const encodedQuery = encodeURIComponent(query);
  return fetch(`${config.BASE_URL}/api/search/${encodedQuery}`)
    .then(res => {
      return res.json();
    })
    .then(results => {
      return results;
    });
};

export default search;
