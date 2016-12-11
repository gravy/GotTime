import React from 'react';
import Navigation from 'Navigation';

let App = ({children}) => {
  return (
    <div className="App">
      <div>
        <div>
          <Navigation/>
          <p>App.jsx rendered</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
