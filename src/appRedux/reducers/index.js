import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import CovidDataGet from "./CovidDataGet";

export default (history) => combineReducers({
  router: connectRouter(history),
  CovidDataGet: CovidDataGet,
});
