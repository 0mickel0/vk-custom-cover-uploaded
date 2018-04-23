import axios from "axios";
import { FETCH_WEATHER, UPDATE_WEATHER_SETTING, SET_CURRENT_COUNTRY } from '../constatnts/ActionType'

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function setCurrentCountry(settings) {
  return {
    type: SET_CURRENT_COUNTRY,
    payload: settings
  };
}

const updateWeatherSettings = (setting) => {
  console.log(setting);
  return dispatch => {
    return dispatch({
      type: UPDATE_WEATHER_SETTING,
      payload: Promise.all([
        dispatch(fetchWeather(setting.country)),
        dispatch(setCurrentCountry(setting.country))
      ])
    })
  }
};

export default updateWeatherSettings