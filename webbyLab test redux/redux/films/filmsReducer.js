import { combineReducers } from "redux";
import * as filmTypes from "./filmTypes";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case filmTypes.FETCH_FILMS_SUCCESS:
      return payload.films;

    case filmTypes.ADD_FILM_SUCCESS:
      return [...state, payload.films];

    case filmTypes.DELETE_FILM_SUCCESS:
      return state.filter(films => films.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case filmTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case filmTypes.FETCH_FILMS_START:
    case filmTypes.ADD_FILM_START:
    case filmTypes.DELETE_FILM_START:
      return true;

    case filmTypes.FETCH_FILMS_SUCCESS:
    case filmTypes.FETCH_FILMS_FAILURE:
    case filmTypes.ADD_FILM_SUCCESS:
    case filmTypes.ADD_FILM_FAILURE:
    case filmTypes.DELETE_FILM_SUCCESS:
    case filmTypes.DELETE_FILM_FAILURE:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case filmTypes.FETCH_FILMS_START:
    case filmTypes.ADD_FILM_START:
    case filmTypes.DELETE_FILM_START:
      return null;

    case filmTypes.FETCH_FILMS_FAILURE:
    case filmTypes.ADD_FILM_FAILURE:
    case filmTypes.DELETE_FILM_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer
});
