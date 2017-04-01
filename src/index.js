import App from './App'
import LandingPage from './views/LandingPage'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

// Need to modify with global container
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/login" component={LandingPage} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
