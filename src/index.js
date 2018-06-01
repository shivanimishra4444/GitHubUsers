import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route,Link,Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import App from './containers/app';
import RepoDetail from './containers/repoDetail';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <div className="container">
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                    GitHubApp
                    </Link>
                 </div>
                </div>
            </nav>
            <Switch>
            <Route path="/user/repos/:_name" component={RepoDetail} />
            <Route exact path="/" component={App} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
  </Provider>
  , document.querySelector('.container'));