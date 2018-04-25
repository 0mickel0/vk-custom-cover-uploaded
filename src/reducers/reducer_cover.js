import { FETCH_UPLOAD_COVER_URL, FETCH_UPLOADED_COVER } from "../constatnts/ActionType";
export default function (state = {defaultCoverSrc: './cover.jpg', name:"Penza",}, action) {
  switch(action.type){
    case FETCH_UPLOAD_COVER_URL:
      return  action.payload;
    case FETCH_UPLOADED_COVER:
      return action.payload;
    default:
      return state;
  }
}