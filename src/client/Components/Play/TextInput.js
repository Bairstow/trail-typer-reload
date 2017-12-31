import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailPanel from 'Components/Common/DetailPanel';

class TextInput extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <DetailPanel>Text Input</DetailPanel>;
  }
}

export default TextInput;
