import React from 'react';
import { connect } from 'react-redux';

const PageHeader = ({ iconClass, title }) => {
  return (
    <div className="ui fluid padded grid page-header">
      <div className="nine wide column">
        <h3 className="ellipsis-text">
          <i className={iconClass} />
          {title}
        </h3>
      </div>
    </div>
  );
}

PageHeader.PropTypes = {
  iconClass: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  title: state.pageHeader.get('title'),
  iconClass: state.pageHeader.get('iconClass')
});

export default connect(mapStateToProps)(PageHeader);