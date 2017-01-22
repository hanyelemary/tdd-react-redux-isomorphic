import React from 'react';
const NoSearchResults = ({ errorClassName, errorMessage, secondaryMessage }) => {
  return (
    <div className="ui centered padded grid">
      <div className="ui centered padded grid">
        <div className={errorClassName}>
          <h2 className="no-results-text">{errorMessage}</h2>
          <hr />
          <div className="no-results-suggest">
            <i>{secondaryMessage}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSearchResults;
