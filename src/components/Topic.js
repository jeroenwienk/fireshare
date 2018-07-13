import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Topic extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
}

export default Topic;
