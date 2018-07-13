import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

import authentication from '../../authentication';

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { isAuthenticated } = this.props;

    if (
      prevProps.isAuthenticated === false &&
      isAuthenticated === true &&
      this.state.redirectToReferrer === false
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  authenticate = () => {
    authentication
      .authenticateWithGoogle()
      .then(result => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(error => {
        alert('login failed');
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.authenticate}>Log in</button>
      </div>
    );
  }
}

export default Login;
