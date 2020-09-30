import React from 'react';

import Search from './Search';
import MovieContainer from './Movie-Container';

import './App.css';

console.log(process.env)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Movie Search App</h3>
      </header>
      <Search />
      <MovieContainer />
    </div>
  );
}

export default App;
