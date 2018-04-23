import { FETCH_WEATHER, UPDATE_WEATHER_SETTING, SET_CURRENT_COUNTRY } from "../constatnts/ActionType";

export default function(state = {coord:[], name: "", main:{temp:''}}, action) {
  switch (action.type) {
    case UPDATE_WEATHER_SETTING:
      return action.payload.data;
    case FETCH_WEATHER:
      return action.payload.data;
    case SET_CURRENT_COUNTRY:
      return {...state, name: action.payload.country};
    default:
      return state;
  }
  return state;
}