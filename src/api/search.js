import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const search = (query) => {
  const encodedQuery = encodeURIComponent(query);
  return fetch(`${document.location.origin}/api/search/${encodedQuery}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return { error: `Failure searching for "${query}"` };
      }
    })
    .then(results => {
      return results;
    });
};

export default search;
