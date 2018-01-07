import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextDisplayComponent from 'Components/Play/TextDisplay';

class TextDisplay extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const targetText = 'This is the current targetText';
    const textState = {
      targetText: targetText.split(''),
      currentPosition: 15,
      inError: 3,
    };
    return <TextDisplayComponent {...textState} />;
  }
}

export default TextDisplay;
