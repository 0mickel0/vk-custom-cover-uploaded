import _ from "lodash";
import { FETCH_USERS } from "../constatnts/ActionType";
export default function (state = [], action) {
  switch(action.type){
    case FETCH_USERS:
      return _.mapKeys(action.payload, "id");
  }
  return state;
}