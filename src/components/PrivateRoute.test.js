import React from 'react';
import renderer from 'react-test-renderer';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import Route from 'react-router-dom/Route';
import PrivateRoute from './PrivateRoute';

const Component = props => {
  return <div>Authenticated</div>;
};

describe('<PrivateRoute />', () => {
  test('it renders redirect when not authenticated', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <div>
            <PrivateRoute
              exact
              component={Component}
              isAuthenticated={false}
              path="/"
            />
            <Route
              exact
              path="/login"
              render={props => {
                return <div>Unauthenticated {props.location.pathname}</div>;
              }}
            />
          </div>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders route when authenticated', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <div>
            <PrivateRoute
              component={Component}
              isAuthenticated={true}
              path="/"
            />
          </div>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
