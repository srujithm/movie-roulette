import React from 'react';
import MovieCard from '../movie-card/movie-card';
import './movie-list.css';

const MovieList = props => {
    return (
        <div className="movie-list">
            {props.movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
};

export default MovieList;