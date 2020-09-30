import React from 'react';

import MovieCard from './Movie-Card';

function MovieContainter({movies}) {
    if (!movies || !movies.length) {
        return <div>nothing to see!</div>;
    }
    return <div>
        {
            movies.map(e=> {
                return <MovieCard movie={e} />
            })
        }
    </div>
}

export default MovieContainter;