import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailPanel from 'Components/Common/DetailPanel';

class TrailDisplay extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <DetailPanel>Trail Display</DetailPanel>;
  }
}

export default TrailDisplay;
