import React from 'react';

const SearchResult = ({ result }) => {
  const profilePictureSrc = '/images/' + (result.picture ? result.picture : 'default-picture.png');
  return (
    <div className="search-result">
      <a href={`/consultants/${result.alias}`}>
        <div className="search-result-icon">
          <img className="search-result-image" src={profilePictureSrc} alt="Consultant" />
        </div>
        <div className="search-result-content">
          <div>
            <div className="search-result-name">
              {result.name}
            </div>
            <div className="search-result-grade">
              {result.grade}
            </div>
          </div>
          <div className="search-result-website">
            {result.website}
          </div>
        </div>
      </a>
    </div>
  );
};

SearchResult.propTypes = {
  result: React.PropTypes.object.isRequired
};

export default SearchResult;
