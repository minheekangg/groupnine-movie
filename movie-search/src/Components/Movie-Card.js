import React from 'react';
import './Movie-Card.css';

function MovieCard(props) {
    const { title, vote_average, vote_count, release_date, overview, poster_path } = props.movie;
    console.log('voting average is', vote_average, vote_average/10 > 1/5);
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
                    <div>
                        <span className={ vote_average / 10 > 0 ? "filled-star" : "empty-star"}></span>
                        <span className={vote_average / 10 > 1 / 5 ? "filled-star" : "empty-star"}></span>
                        <span className={vote_average / 10 > 2 / 5 ? "filled-star" : "empty-star"}></span>
                        <span className={vote_average / 10 > 3 / 5 ? "filled-star" : "empty-star"}></span>
                        <span className={vote_average / 10 > 4 / 5 ? "filled-star" : "empty-star"}></span>
                    </div>
                    { vote_count && <p>{vote_count} Reviews</p> }
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