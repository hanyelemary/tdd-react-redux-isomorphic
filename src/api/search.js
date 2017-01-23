import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const search = (query) => {
  const encodedQuery = encodeURIComponent(query);
  return fetch(`${document.location.origin}/api/search/${encodedQuery}`)
    .then(res => {
      return res.json();
    })
    .then(results => {
      return results;
    });
};

export default search;
