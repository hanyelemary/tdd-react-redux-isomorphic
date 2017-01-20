import React from 'react';
import Banner from './header/components/Banner';

const App = ({ children }) => {
  return (
    <div>
      <Banner />
      <main>{children}</main>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
