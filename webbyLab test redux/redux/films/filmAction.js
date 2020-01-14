import * as filmTypes from "./filmTypes";

export const addFilmStart = () => {
  return {
    type: filmTypes.ADD_FILM_START
  };
};

export const addFilmSuccess = film => {
  return {
    type: filmTypes.ADD_FILM_SUCCESS,
    payload: {
      note
    }
  };
};

export const addFilmFailure = error => {
  return {
    type: filmTypes.ADD_FILM_FAILURE,
    payload: {
      error
    }
  };
};

export const deleteFilmStart = () => {
  return {
    type: filmTypes.DELETE_FILM_START
  };
};

export const deleteFilmSuccess = id => {
  return {
    type: filmTypes.DELETE_FILM_SUCCESS,
    payload: {
      id
    }
  };
};

export const deleteFilmFailure = error => {
  return {
    type: filmTypes.DELETE_FILM_FAILURE,
    payload: {
      error
    }
  };
};

export const fetchFilmssStart = () => {
  return {
    type: filmTypes.FETCH_FILMS_START
  };
};

export const fetchFilmsSuccess = films => {
  return {
    type: filmTypes.FETCH_FILMS_SUCCESS,
    payload: {
      notes
    }
  };
};

export const fetchFilmsFailure = error => {
  return {
    type: filmTypes.FETCH_FILMS_FAILURE,
    payload: {
      error
    }
  };
};

export const changeFilter = filter => {
  return {
    type: filmTypes.CHANGE_FILTER,
    payload: {
      filter
    }
  };
};
