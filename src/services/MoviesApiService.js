class MoviesApiService {
  apiKey = 'c33f54366ccf34ec81775c2d46bea63e';

  // получает объект с инфой о фильмах
  getMovies = async (title, page = null) => {
    let currentPage = page;

    if (page) {
      currentPage = `&page=${page}`;
    } else {
      currentPage = ``;
    }

    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${title}${currentPage}`
    );
    // console.log(movies, 'фильмецы')

    if (movies.ok) {
      movies = await movies.json();
      return movies;
    }

    throw new Error(movies.status);
    // console.log(this.state)
  };

  // получает жанры при запуске приложения
  getGenres = async () => {
    let genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`);
    if (genres.ok) {
      genres = await genres.json();
      // console.log(genres, 'все жанры')
      return genres.genres;
    }

    throw new Error(genres.status);
  };

  // получает ID сессии гостя при запуске приложения
  getGuestSessionId = async () => {
    let GetGuestSession = await fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.apiKey}`
    );
    if (GetGuestSession.ok) {
      GetGuestSession = await GetGuestSession.json();
      // console.log(GetGuestSession.guest_session_id)
      return GetGuestSession.guest_session_id;
    }

    throw new Error(GetGuestSession.status);
  };

  // позволяет оценивать фильмы. Используется при нажатии на звёздочку
  rateMovie = async (value, id, guestId) => {
    const rating = { value };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${this.apiKey}&guest_session_id=${guestId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(rating),
      }
    );

    await response.json();
    // console.log(response)
  };

  // позволяет получить оцененные пользователем фильмы по его ID сессии
  getGuestRatedMovies = async (guestSesId) => {
    let movies = await fetch(
      `https://api.themoviedb.org/3/guest_session/${guestSesId}/rated/movies?api_key=${this.apiKey}`
    );
    if (movies.ok) {
      // console.log(movies)
      movies = await movies.json();
      // console.log(movies)
      return movies;
    }

    throw new Error(movies.status);
  };
}

export default MoviesApiService;
