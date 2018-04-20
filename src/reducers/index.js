import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ItemsReducer from "./reducer_items";
import PostsReducer from "./reducer_posts";
import ModalReducer from './reducer_modal';
import UserReducer from './reducer_users';
import CoverUrlReducer from './reducer_cover_url';
import WeatherReducer from "./reducer_weather";

const rootReducer = combineReducers({
  posts: PostsReducer,
  items: ItemsReducer,
  form: formReducer,
  modal: ModalReducer,
  users: UserReducer,
  upload_url: CoverUrlReducer,
  weather: WeatherReducer
});

export default rootReducer;