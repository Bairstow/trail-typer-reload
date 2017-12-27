import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

/*
const Selector = styled('div')`
  width: ${spacing.x128};
  line-height: ${spacing.x32};
  text-align: center;
`;
*/

class Selector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, iconClassName } = this.props;
    return (
      <div>
        <i className={iconClassName} />
        <div>{text}</div>
      </div>
    );
  }
}

export default Selector;
