import React from 'react';

import Search from './Search';
import MovieContainer from './Movie-Container';

import './App.css';

class App extends React.Component {
  state = {
    movies: [],
    page: 1,
    search: '',
  };

  handleFetch(old) {
    const { search, page, movies } = this.state;
    console.log('old?', old)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&page=${page}`)
      .then(res => res.json())
      .then(result => {
        const { results } = result;
        console.log(result)
        if (!!old) {
          this.setState({ movies: [...movies, ...results]})
        } else {
          this.setState({ movies: results })
        }

      })
      .catch(err => console.log('err', err))
  }

  handleSearch = searchQuery => {
    console.log('searched', searchQuery);
    if (searchQuery === this.state.search) return;
    this.setState({ search: searchQuery, page: 1 }, () => this.handleFetch());
  }

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 }, () => this.handleFetch({old: true}));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h3>Movie Search App</h3>
        </header>
        <Search handleSearch={this.handleSearch}/>
        <MovieContainer movies={movies} handleLoadMore={this.handleLoadMore}/>
      </div>
    );
  }
}

export default App;
