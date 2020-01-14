import { combineReducers } from "redux";
import filmsReducer from "./films/filmsReducer";

export default combineReducers({
  films: filmsReducer
});
