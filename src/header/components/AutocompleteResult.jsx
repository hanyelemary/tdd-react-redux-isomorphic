import React from 'react';
import classnames from 'classnames';

const AutocompleteResult = ({ content, focused, hrefForResult }) => {
  
  const profilePictureSrc = '/images/' + (content.picture ? content.picture : 'default-picture.png');
  const linkClassNames = classnames(
    'autocomplete-result',
    'search-link',
    { selected: focused }
  );

  return (
    <a
      href={hrefForResult}
      className={linkClassNames}
      id={content.id}
    >
      <img
        src={profilePictureSrc}
        alt="Consultant"
        className="autocomplete-result-icon"
      />
      <div className="autocomplete-result-name">
        {content.name}
      </div>
    </a>
  );
};

AutocompleteResult.propTypes = {
  content: React.PropTypes.object.isRequired,
  hrefForResult: React.PropTypes.string,
  focused: React.PropTypes.bool
};

export default AutocompleteResult;
