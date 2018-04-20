import _ from "lodash";
import { FETCH_UPLOAD_COVER_URL } from "../constatnts/ActionType";
export default function (state = [], action) {
  switch(action.type){
    case FETCH_UPLOAD_COVER_URL:
      return  action.payload;
  }
  return state;
}