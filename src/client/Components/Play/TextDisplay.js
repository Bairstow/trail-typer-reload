import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailPanel from 'Components/Common/DetailPanel';

class TextDisplay extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <DetailPanel>Text Display</DetailPanel>;
  }
}

export default TextDisplay;
