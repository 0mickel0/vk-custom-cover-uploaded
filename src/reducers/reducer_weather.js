import { FETCH_WEATHER } from "../constatnts/ActionType";

export default function(state = {coord:[], name: "", main:{temp:''}}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data;
  }
  return state;
}