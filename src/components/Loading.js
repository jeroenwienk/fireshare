import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  static propTypes = {
    error: PropTypes.bool,
    retry: PropTypes.func,
    pastDelay: PropTypes.bool
  };

  render() {
    const { error, retry, pastDelay } = this.props;

    if (error) {
      return (
        <div>
          Error! <button onClick={retry}>Retry</button>
        </div>
      );
    }

    if (pastDelay) {
      return <div>Loading...</div>;
    }

    return null;
  }
}

export default Loading;
