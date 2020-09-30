import React from 'react';

import Search from './Search';
import MovieContainer from './Movie-Container';

import './App.css';

console.log(process.env)

class App extends React.Component {
  state = {
    movies: [],
  };

  handleSearch(e) {
    console.log('inside app search is', e);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Movie Search App</h3>
        </header>
        <Search handleSearch={this.handleSearch}/>
        <MovieContainer />
      </div>
    );
  }
}

export default App;
