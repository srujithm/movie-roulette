import React from 'react';
import './movie-card.css';

const MovieCard = props => {
    return (
    <div className="movie-card">
        <img src={"https://image.tmdb.org/t/p/w92" + props.movie.poster_path} alt={props.movie.title}></img>
        <h3>{props.movie.title}</h3>
    </div>
    )
};

export default MovieCard;