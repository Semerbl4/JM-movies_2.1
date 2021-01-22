import './Filters.css';

import React from 'react';
import PropTypes from 'prop-types';

import MoviesApiService from '../../services/MoviesApiService';

const Filters = (props) => {
  const { setSearchMode, setRatedMovies, guestSessionId, toogleLoading, setError } = props;

  const moviesApiService = new MoviesApiService();

  return (
    <ul className="filters" type="none">
      <li className="filters__filter">
        <button
          className="filters__button"
          type="button"
          name="search"
          onClick={(event) => {
            setSearchMode(event);
          }}
        >
          Search
        </button>
      </li>
      <li className="filters__filter">
        <button
          className="filters__button"
          type="submit"
          name="rated"
          onClick={(event) => {
            toogleLoading();
            moviesApiService
              .getGuestRatedMovies(guestSessionId)
              .then((resolve) => {
                setRatedMovies(resolve);
              })
              .then(() => setSearchMode(event))
              .then(() => toogleLoading())
              .catch((reject) => {
                setError(reject);
              });
          }}
        >
          Rated
        </button>
      </li>
    </ul>
  );
};

Filters.propTypes = {
  setSearchMode: PropTypes.func.isRequired,
  setRatedMovies: PropTypes.func.isRequired,
  guestSessionId: PropTypes.string.isRequired,
  toogleLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Filters;
