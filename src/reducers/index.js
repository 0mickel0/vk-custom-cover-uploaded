import { combineReducers } from "redux";
import CoverUrlReducer from './reducer_cover';
import WeatherReducer from "./reducer_weather";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  settings: CoverUrlReducer,
  weather: WeatherReducer,
  form: formReducer
});

export default rootReducer;