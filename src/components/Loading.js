import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const { error, retry, pastDelay } = this.props;

    if (error) {
      return (
        <div>
          Error! <button onClick={retry}>Retry</button>
        </div>
      );
    } else if (pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  }
}

export default Loading;
