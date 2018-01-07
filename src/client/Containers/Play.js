import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrailDisplay from 'Components/Play/TrailDisplay';
import TextDisplay from 'Containers/Play/TextDisplay';
import TextInput from 'Components/Play/TextInput';

class Play extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TrailDisplay />
        <TextDisplay />
        <TextInput />
      </div>
    );
  }
}

export default Play;
