import HTTPStatus from 'http-status-codes';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

const searchServiceUrl = 'http://localhost:8081';
const searchUrl = `${searchServiceUrl}/consultants/search/`;

export default class SearchService {
  static searchForQuery(query, res) {
    fetch(searchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: query
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        console.log('Error occurred while trying to search', response);
        res.sendStatus(response.status);
    }).then((searchResults) => {
        res.status(HTTPStatus.OK).json(searchResults);    
    }).catch(error => {
        console.log('Error occurred while fetching search results', error);
        res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
    });
  };
};
