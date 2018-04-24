import axios from "axios";
import { FETCH_WEATHER, UPDATE_WEATHER_SETTING } from '../constatnts/ActionType'

const API_KEY = "5e8787cabe48d22f1a21f7f8635196c4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

const updateWeatherSettings = (setting) => {
  return dispatch => {
    return dispatch({
      type: UPDATE_WEATHER_SETTING,
      payload: Promise.all([
        dispatch(fetchWeather(setting))
      ])
    })
  }
};

export default updateWeatherSettings