import React from 'react';

import Search from './Search';
import MovieContainer from './Movie-Container';

console.log(process.env)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Movie Search App
      </header>
      <Search />
      <MovieContainer />
    </div>
  );
}

export default App;
