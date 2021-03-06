import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return (
      <div className="movies_movie">
        <img src={poster} alt={title} title={title} />
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} classNmae="genres_genre">{genres}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
