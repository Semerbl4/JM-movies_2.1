import './App.css';
import 'antd/dist/antd.css';

import React from 'react';

import { Alert, Pagination } from 'antd';

import MoviesApiService from '../../services/MoviesApiService';

import { GenresProvider } from '../context/context';

import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';

export default class App extends React.Component {
  moviesApiServise = new MoviesApiService();

  state = {
    movies: null,
    ratedMovies: null,
    loading: false,
    error: false,
    totalPages: null,
    currentPage: 1,
    guestSessionId: '',
    searchMode: true,
    genres: null,
    moviesNotFound: false,
    searchValueSaved: '',
  };

  online = window.navigator.onLine;

  componentDidMount() {
    this.moviesApiServise
      .getGenres()
      .then((res) => this.setState({ genres: res }))
      .catch((rej) => {
        this.setState({ error: rej.message });
      });

    this.moviesApiServise
      .getGuestSessionId()
      .then((res) => {
        this.setState({ guestSessionId: res });
      })
      .catch((rej) => {
        this.setState({ error: rej.message });
      });
  }

  componentDidCatch(err) {
    this.setState({ error: err });
  }

  toogleLoading = () => {
    this.setState((state) => ({
      loading: !state.loading,
    }));
  };

  setRatedMovies = (movies) => {
    // console.log(movies.results)
    this.setState({
      ratedMovies: movies.results,
    });
    // this.toogleLoading()
  };

  setError = (err) => {
    this.setState({ error: err.message });
  };

  setSearchValueSaved = (value) => {
    this.setState({searchValueSaved: value})
  }

  setSearchMode = (evnt) => {
    if (evnt.target.name === 'search') {
      this.setState({
        searchMode: true,
      });
    } else {
      this.setState({ searchMode: false });
    }
  };

  changeMovies = (title, page) => {
    this.setState((state) => ({
      loading: !state.loading,
      totalPages: null,
    }));

    this.moviesApiServise
      .getMovies(title, page)
      .then((res) => {
        this.setState((state) => ({
          movies: res.results,
          loading: !state.loading,
          totalPages: res.total_pages,
          moviesNotFound: res.results.length === 0,
        }));
      })
      .catch((rej) => {
        this.setState({ error: rej.message });
      });
  };

  setCurrentPage = (page) => {
    console.log(page)
    this.setState({ currentPage: page });
  };

  isMoviesFound = () => {
    const { movies } = this.state;
    const { loading } = this.state;
    const { guestSessionId } = this.state;
    const { ratedMovies } = this.state;
    const { searchMode } = this.state;
    const { moviesNotFound } = this.state;

    if (moviesNotFound) {
      return <p className="notFoundMessage">Sry, this movie was not found</p>;
    }
    return (
      <MoviesList
        movies={movies}
        ratedMovies={ratedMovies}
        searchMode={searchMode}
        loading={loading}
        guestSessionId={guestSessionId}
      />
    );
  };

  render() {
    const { movies } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    const { totalPages } = this.state;
    const { currentPage } = this.state;
    const { guestSessionId } = this.state;
    const { searchMode } = this.state;
    const { genres } = this.state;
    const { searchValueSaved } = this.state;

    // console.log(totalPages)

    if (!this.online) {
      return <Alert type="warning" message="Ваш интернет приказал долго жить (Отсутствует соединение сети)" />;
    }

    if (error) {
      return <Alert message={`Произошла ошибка ${error}`} type="error" />;
    }

    return (
      <GenresProvider value={genres}>
        <main className="app">
          <div className="container">
            <Filters
              guestSessionId={guestSessionId}
              setSearchMode={this.setSearchMode}
              setRatedMovies={this.setRatedMovies}
              toogleLoading={this.toogleLoading}
              setError={this.setError}
            />
            {searchMode ? <Search changeMovies={this.changeMovies} currentPage={currentPage}
            searchValueSaved={searchValueSaved} setSearchValueSaved={this.setSearchValueSaved} /> : null}
            {this.isMoviesFound()}
            {!loading && movies && searchMode ? (
              <Pagination
                className="pagination"
                defaultCurrent={currentPage}
                total={totalPages * 10}
                showSizeChanger={false}
                onChange={(page) => {
                  this.setCurrentPage(page);
                }}
              />
            ) : null}
          </div>
        </main>
      </GenresProvider>
    );
  }
}
