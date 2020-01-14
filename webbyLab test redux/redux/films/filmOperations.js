import * as filmsActions from "./filmsActions";
import filmsApiService from "../../services/films-api";

const fetchFilms = () => dispatch => {
  dispatch(filmsActions.fetchFilmsStart());

  filmsApiService
    .fetchFilms()
    .then(films => dispatch(filmsActions.fetchFilmsSuccess(films)))
    .catch(error => dispatch(filmsActions.fetchFilmsFailure(error)));
};

const saveFilm = text => dispatch => {
  const film = { text, completed: false };

  dispatch(filmsActions.addFilmStart());

  filmsApiService
    .saveFilm(film)
    .then(savedFilm => dispatch(filmsActions.addFilmSuccess(savedFilm)))
    .catch(error => dispatch(filmsActions.addFilmFailure(error)));
};

const deleteFilm = id => dispatch => {
  dispatch(filmActions.deleteFilmStart());

  filmsApiService
    .deleteFilm(id)
    .then(() => dispatch(filmsActions.deleteFilmSuccess(id)))
    .catch(error => dispatch(filmsActions.deleteFilmFailure(error)));
};

export default { saveFilm, deleteFilm, fetchFilms };
