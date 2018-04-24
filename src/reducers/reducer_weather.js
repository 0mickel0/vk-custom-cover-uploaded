import {FETCH_WEATHER, UPDATE_WEATHER_SETTING} from "../constatnts/ActionType";

const initialState = {
  "coord": {"lon": 45, "lat": 53.2},
  "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "02d"}],
  "base": "stations",
  "main": {
    "temp": 279.592,
    "pressure": 1000.14,
    "humidity": 66,
    "temp_min": 279.592,
    "temp_max": 279.592,
    "sea_level": 1025.79,
    "grnd_level": 1000.14
  },
  "wind": {"speed": 5.59, "deg": 312.003},
  "clouds": {"all": 8},
  "dt": 1524571081,
  "sys": {"message": 0.0072, "country": "RU", "sunrise": 1524534026, "sunset": 1524586614},
  "id": 511565,
  "name": "Penza",
  "cod": 200
}
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_WEATHER_SETTING:
      return action.payload.data;
    case FETCH_WEATHER:
      return action.payload.data;
    default:
      return state;
  }
}