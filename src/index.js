import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import{ createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxPromise from "redux-promise";
import ReduxThunk from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension';
import './app.scss';

import App from './containers/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devToolsEnhancer())}>
    <BrowserRouter>
      <div className="app-wrapper">
        <Switch>
          <Route path="/" component={ App } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
