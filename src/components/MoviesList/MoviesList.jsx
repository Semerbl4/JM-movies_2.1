import './MoviesList.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Spin } from 'antd';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = (props) => {
  const { movies } = props;
  const { loading } = props;
  const { guestSessionId } = props;
  const { searchMode } = props;
  const { ratedMovies } = props;

  const createMovieCards = (srchMode) => {
    // console.log(srchMode, ratedMovies)

    const moviesForCards = srchMode ? movies : ratedMovies;

    if (!movies) {
      // console.log('ничего нет')
      return null;
    }

    // console.log(moviesForCards, 'фильмы')

    const movieCards = moviesForCards.map((el) => (
      <li key={el.id} className="movie-list__item">
        <MovieCard
          title={el.original_title}
          overview={el.overview}
          poster={el.poster_path}
          releaseDate={el.release_date}
          rating={el.vote_average}
          id={el.id}
          guestRating={el.rating}
          genreIds={el.genre_ids}
          guestSessionId={guestSessionId}
        />
      </li>
    ));
    // console.log(movieCards, 'Карточка')
    return movieCards;
  };

  if (loading) {
    return <Spin size="large" className="spin_scale" />;
  }

  return (
    <ul className="movies-list" type="none">
      {createMovieCards(searchMode)}
    </ul>
  );
};

MoviesList.defaultProps = {
  movies: null,
  loading: false,
  guestSessionId: null,
  ratedMovies: null,
};

MoviesList.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.oneOf([null])]),
  loading: PropTypes.bool,
  guestSessionId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  searchMode: PropTypes.bool.isRequired,
  ratedMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([null])]),
};

export default MoviesList;
