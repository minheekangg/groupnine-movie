import React from 'react';

import Search from './Search';
import MovieContainer from './Movie-Container';

import './App.css';


class App extends React.Component {
  state = {
    movies: [],
    search: 'd'
  };

  handleSearch = e => {
    console.log('inside app search is', e);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.search}`)
      .then(res=> res.json())
      .then(result => {
        const {results} = result;
        this.setState({ movies: results }, () => {
          console.log('after fetch state has been changed to :', this.state);
        });
      })
      .catch(err=>console.log('err', err))
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
