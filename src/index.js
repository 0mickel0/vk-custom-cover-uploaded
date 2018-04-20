import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import{ createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxPromise from "redux-promise";
import { devToolsEnhancer } from 'redux-devtools-extension';
import './app.scss';

import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import WallPosts from './components/vk_api/posts/wall_items';
import UserSearch from './components/vk_api/user-search/user-search';
import PostCoverPhoto from './components/vk_api/cover-photo/cover-photo';
import reducers from './reducers';

import ModalRoot  from './constatnts/modalroot';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devToolsEnhancer())}>
    <BrowserRouter>
      <div className="app-wrapper">
        <Switch>
          <Route path="/posts/new" component={ PostsNew } />
          <Route path="/posts/:id" component={ PostsShow } />
          <Route path="/wall" component={ WallPosts } />
          <Route path="/search" component={ UserSearch } />
          <Route path="/cover" component={ PostCoverPhoto } />
          <Route path="/" component={ PostIndex } />
        </Switch>
        <ModalRoot />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
