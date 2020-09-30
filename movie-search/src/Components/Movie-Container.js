import React from 'react';

import MovieCard from './Movie-Card';

function MovieContainter({movies, handleLoadMore}) {
    if (!movies || !movies.length) {
        return <div>nothing to see!</div>;
    }
    return <div>
        {
            movies.map(e=> {
                return <MovieCard movie={e} key={e.id}/>
            })
        }
        <button className="load-more-button" onClick={handleLoadMore}> Load More </button>
    </div>
}

export default MovieContainter;