import './MovieCard.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Rate } from 'antd';

import MoviesApiService from '../../services/MoviesApiService';

import { GenresConsumer } from '../context/context';

const MovieCard = (props) => {
  // const {key} = props

  // console.log(props)

  const { title, poster, releaseDate, rating, overview, id, guestSessionId, guestRating, genreIds } = props;
  const shortOverview = overview.split(' ').slice(0, 20);
  shortOverview.push('...');

  // console.log(guestRating)

  const moviesApiServise = new MoviesApiService();

  const changeRatingColor = () => {
    if (rating <= 3) {
      return { borderColor: '#E90000' };
    }
    if (rating <= 5) {
      return { borderColor: '#E97E00' };
    }
    if (rating <= 7) {
      return { borderColor: '#E9D100' };
    }
    return { borderColor: '#66E900' };
  };

  const posterLink = (forPoster) => {
    if (poster === null) {
      return null;
    }
    return `https://image.tmdb.org/t/p/w500${forPoster}`;
  };

  const createGenres = (allGenIds, gnrIds) => {
    const genresForCard = gnrIds.map(gnrId => {
      const gnr = allGenIds.find(allGnrItem => allGnrItem.id === gnrId);
      if (!gnr) {
        return null;
      }
      return (
        <li className="movie-card__category" key={gnrId}>
          {gnr.name}
        </li>
      );
    });
    // console.log(genresForCard, 'Наш массив элементов')
    return genresForCard;
  };

  return (
    <GenresConsumer>
      {(getGenres) => (
        <div className="movie-card">
          <img className="movie-card__poster" src={posterLink(poster)} alt="Постер" />
          <div className="movie-card__information">
            <h1 className="movie-card__title">{title}</h1>
            <div className="movie-card__raiting" style={changeRatingColor()}>
              <p>{rating}</p>
            </div>
            <p className="movie-card__date">{releaseDate}</p>
            {genreIds.length > 0 ? <ul className="movie-card__categorys-list" type="none">
              {createGenres(getGenres, genreIds)}
            </ul> : null}
            {!window.matchMedia('(max-width: 420px)').matches ? (
              <p className="movie-card__overview">{shortOverview.join(' ')}</p>
            ) : null}
            <Rate
              count={10}
              allowHalf
              defaultValue={guestRating}
              style={{ width: `${231}px` }}
              onChange={(number) => {
                moviesApiServise.rateMovie(number, id, guestSessionId);
              }}
            />
          </div>
          {window.matchMedia('(max-width: 420px)').matches ? (
            <p className="movie-card__overview">{shortOverview.join(' ')}</p>
          ) : null}
        </div>
      )}
    </GenresConsumer>
  );
};

MovieCard.defaultProps = {
  releaseDate: 'Дата релиза неизвестна',
  rating: 0,
  overview: 'Описание отсутствует',
  poster: null,
  id: 0,
  guestSessionId: null,
  guestRating: 0,
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null])]),
  releaseDate: PropTypes.string,
  rating: PropTypes.number,
  overview: PropTypes.string,
  id: PropTypes.number,
  guestSessionId: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  guestRating: PropTypes.number,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MovieCard;
