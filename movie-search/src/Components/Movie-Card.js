import React from 'react';
import './Movie-Card.css';

function MovieCard(props) {
    const { title, vote_average, vote_count, release_date, overview, poster_path } = props.movie;

    return (
        <div className="movie-container">
            <div className="movie-container-left">
                {poster_path && <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />}
            </div>
            <div className="movie-container-right">
                <h6>{title}</h6>
                <p className="movie-metadata">{trimYear(release_date)}</p>
                <p className="movie-description">{overview}</p>
                <div className="movie-metadata"> 
                    <p>{vote_average}</p> 
                    <p>{vote_count}</p> 
                </div>
            </div>
        </div>
    )
}

export default MovieCard;


function trimYear (date) {
    if (!date || !date.length) return;

    const splitDate = date.split("-");
    return splitDate[0];
}