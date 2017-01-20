import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from './SearchBarContainer';

const Navigation = () => {
  return (
    <nav className="ui three column fluid padded grid">
      <div className="left floated left aligned column">
        <Link to="/">
          <span className="product-title">
            <img src="/images/tw-logo.png" className="logo" alt="ThoughtWorks logo" />
          </span>
        </Link>
      </div>
      <div className="center aligned column">
        <SearchBarContainer />
      </div>
      <div className="right floated right aligned column">
        Menu
      </div>
    </nav>
  );
};

export default Navigation;
