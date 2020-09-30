import React from 'react';
import './Movie-Card.css';

function MovieCard(props) {
    const { title, vote_average, vote_count, release_date, overview, poster_path } = props.movie;

    return (
        <div class="movie-container">
            <img class="movie-container-left" src={`https://image.tmdb.org/t/p/w154${poster_path}`}/>
            <div class="movie-container-right">
                <h6>{title}</h6>
                <p class="movie-metadata">{release_date}</p>
                <p class="movie-description">{overview}</p>
                <div class="movie-metadata"> 
                    <p>{vote_average}</p> 
                    <p>{vote_count}</p> 
                </div>
            </div>
        </div>
    )
}

export default MovieCard;