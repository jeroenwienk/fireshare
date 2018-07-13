import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

import authentication from './authentication';

const LoadableLogin = Loadable({
  loader: () =>
    import('./components/pages/Login' /* webpackChunkName: "login" */),
  loading: Loading
});

const LoadableHome = Loadable({
  loader: () => import('./components/Home' /* webpackChunkName: "home" */),
  loading: Loading
});

const LoadableAbout = Loadable({
  loader: () => import('./components/About' /* webpackChunkName: "about" */),
  loading: Loading
});

const LoadableTopics = Loadable({
  loader: () => import('./components/Topics' /* webpackChunkName: "topics" */),
  loading: Loading
});

class Root extends Component {
  static propTypes = {};

  render() {
    const { isAuthenticated } = this.props;

    return (
      <BrowserRouter>
        <div>
          {isAuthenticated && (
            <Fragment>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>

              <button onClick={authentication.unauthenticate}>logout</button>

              <hr />
            </Fragment>
          )}

          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={LoadableHome}
              isAuthenticated={isAuthenticated}
            />
            <Route
              path="/login"
              render={props => {
                return (
                  <LoadableLogin {...props} isAuthenticated={isAuthenticated} />
                );
              }}
            />
            <PrivateRoute
              path="/about"
              component={LoadableAbout}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/topics"
              component={LoadableTopics}
              isAuthenticated={isAuthenticated}
            />
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
