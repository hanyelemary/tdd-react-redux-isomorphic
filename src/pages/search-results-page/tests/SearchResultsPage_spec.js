import React from 'react';
import expect from 'expect';
import nock from 'nock';
import HttpStatus from 'http-status-codes';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import SearchResultsPageContainer from '../components/SearchResultsPageContainer';
import NoSearchResults from '../components/NoSearchResults';
import configureStore from '../../../store';
import rootSaga from '../../../sagas';
import config from '../../../config';

/* necessary for full end to end testing */
const store = configureStore();
store.runSaga(rootSaga);

describe('Search results page', () => {
  describe('empty result set', () => {
    it('should render "No results found" message when API returns empty result', (done) => {
      //given
      const emptyResult = { "consultants": [] };      
      
      //when
      nock(config.BASE_URL)
        .get('/api/search/somequery')
        .reply(HttpStatus.OK, emptyResult);

      const searchResultsPage = mount(
        <Provider store={store}>
          <SearchResultsPageContainer params={{query: 'somequery'}} />
        </Provider>
      );

      //then
      setTimeout(() => {
        expect(searchResultsPage.find('.no-results-container').exists()).toEqual(true);
        done();
      }, 10);
    });

    it('should render results based on response from the API', (done) => {
      //given
      const response = {
        "consultants":[{
          "id":1, 
          "name":"Hany Elemary",
          "role":"Developer",
          "grade":"Lead Consultant"
        }, 
        {
          "id":3,
          "name":"Hailey Bloom",
          "role":"Developer",
          "grade":"Sr. Consultant"
        }
      ]};

      //when
      nock(config.BASE_URL)
        .get('/api/search/somequery')
        .reply(HttpStatus.OK, response);

      const searchResultsPage = mount(
        <Provider store={store}>
          <SearchResultsPageContainer params={{query: 'somequery'}} />
        </Provider>
      );

      //then
      setTimeout(() => {
        expect(searchResultsPage.find('.search-result').length).toEqual(2);
        done();
      }, 10);            
    });
  });

  describe('Failure from Search Service', () => {
    it('should display a message to the user when the service is down', (done) => {
      nock(config.BASE_URL)
        .get('/api/search/somequery')
        .reply(HttpStatus.INTERNAL_SERVER_ERROR);

      const searchResultsPage = mount(
        <Provider store={store}>
          <SearchResultsPageContainer params={{query: 'somequery'}} />
        </Provider>
      );

      //then
      setTimeout(() => {
        expect(searchResultsPage.find('.failure-container').exists()).toEqual(true);
        done();
      }, 10);            
    });
  });
});