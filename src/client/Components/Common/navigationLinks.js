import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { resetGameState, startPracticeGame } from 'utilities/gameAdministration';

const mapDispatchToProps = dispatch => ({
  resetGameState: resetGameState(dispatch),
  startPracticeGame: startPracticeGame(dispatch),
  directToUrl: targetUrl => {
    dispatch(push(targetUrl));
  },
});

class LinkHomeComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { resetGameState, directToUrl } = this.props;
    const directHome = e => {
      e.preventDefault();
      resetGameState();
      directToUrl('/');
    };
    return <div onClick={directHome}>{this.props.children}</div>;
  }
}

export const LinkHome = connect(null, mapDispatchToProps)(LinkHomeComponent);

class LinkPracticeComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { startPracticeGame, directToUrl } = this.props;
    const directPractice = e => {
      e.preventDefault();
      startPracticeGame();
      directToUrl('/practice');
    };
    return <div onClick={directPractice}>{this.props.children}</div>;
  }
}

export const LinkPractice = connect(null, mapDispatchToProps)(LinkPracticeComponent);
