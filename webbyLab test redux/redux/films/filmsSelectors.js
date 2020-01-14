import { createSelector } from "reselect";

const getFilms = state => state.films.items;

const getFilter = state => state.films.filter;

const getFilteredFilms = createSelector(
  [getFilms, getFilter],
  (films, filter) => {
    return films.filter(film =>
      film.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getFilmById = (state, id) => {
  const films = getFilms(state);

  return films.find(film => film.id === id);
};

export default {
  getFilms,
  getFilter,
  getFilteredFilms,
  getFilmById
};
