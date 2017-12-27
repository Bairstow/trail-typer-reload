import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

const SelectorContainer = styled('div')`
  height: ${spacing.x96};
  width: ${spacing.x128};
  line-height: ${spacing.x32};
  text-align: center;
  cursor: pointer;

  & :hover {
    color: ${colors.nord13};
  }
`;

const IconContainer = styled('i')`
  font-size: 32px;
  padding-top: 24px;
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
