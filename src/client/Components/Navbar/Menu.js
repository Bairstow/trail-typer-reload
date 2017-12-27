import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

const IconContainer = styled('div')`
  width: 96px;
  font-size: 20px;
  line-height: ${spacing.x96};
  text-align: center;
  cursor: pointer;

  & :hover {
    color: ${colors.nord13};
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { iconClassName } = this.props;
    return (
      <IconContainer>
        <i className={iconClassName} />
      </IconContainer>
    );
  }
}

export default Menu;
