import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

const SelectorContainer = styled('div')`
  line-height: ${spacing.x32};
  text-align: center;
  cursor: pointer;

  & :hover {
    color: ${colors.nord13};
  }
`;

const IconContainer = styled('i')`
  font-size: 32px;
`;

const LabelText = styled('div')`
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
`;

class Selector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, iconClassName } = this.props;
    const displayText = text.toUpperCase();
    return (
      <SelectorContainer>
        <IconContainer className={iconClassName} />
        <LabelText>{displayText}</LabelText>
      </SelectorContainer>
    );
  }
}

export default Selector;
