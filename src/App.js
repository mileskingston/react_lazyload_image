import React from 'react';
import LazyLoad from './components/LazyLoad';

const App = () => (
  <div className="app">
    <LazyLoad src="http://via.placeholder.com/400x200" alt="placeholder" />
  </div>
);

export default App;
