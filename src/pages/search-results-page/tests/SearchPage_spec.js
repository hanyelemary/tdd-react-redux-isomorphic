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

/* necessary for full end to end testing */
const store = configureStore();
store.runSaga(rootSaga);

describe('Search results page', () => {
    describe('empty result set', () => {
        it('should render "No results found" message when the API returns an empty result', (done) => {
            //given
            const emptyResult = { "consultants": []};
            
            //when
            nock(`${document.location.origin}`)
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
    });

    describe('non empty result set', () => {

    });

    describe('service failure', () => {
        
    });
});