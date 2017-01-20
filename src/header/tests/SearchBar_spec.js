import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  describe('SearchButton conditional display', () => {
    it('should render when there is a non-empty query', () => {
      const fn = () => {};
      const searchBar = mount(
        <SearchBar 
          handleKeyDown={fn}
          handleValueChange={fn}
          handleSearch={fn}
          query="some text"
        />
      );

      const searchButton = searchBar.find('.search-button');

      expect(searchButton.html()).toBe('<button class="search-button">Search</button>');
    });

    it('should not render when there is an empty query', () => {
      const fn = () => {};
      const searchBar = mount(
        <SearchBar 
          handleKeyDown={fn}
          handleValueChange={fn}
          handleSearch={fn}
          query=""
        />
      );

      const searchButton = searchBar.find('.search-button');

      expect(searchButton.exists()).toBe(false);
    });

    it('should not render when there is the query is an empty space', () => {
      const fn = () => {};
      const searchBar = mount(
        <SearchBar 
          handleKeyDown={fn}
          handleValueChange={fn}
          handleSearch={fn}
          query="  "
        />
      );

      const searchButton = searchBar.find('.search-button');

      expect(searchButton.exists()).toBe(false);
    });
  });
});