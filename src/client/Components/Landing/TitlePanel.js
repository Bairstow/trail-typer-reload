import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import DetailPanel from 'Components/Common/DetailPanel';
import Logo from 'Components/Common/Logo';

const TitleContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleText = styled('div')`
  font-size: ${spacing.x64};
  font-weight: 400;
  line-height: ${spacing.x64};
  margin-top: ${spacing.x16};
  color: ${colors.nord13};
  text-align: center;
`;

class TitlePanel extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DetailPanel>
        <TitleContainer>
          <Logo />
          <TitleText>TRAIL TYPER</TitleText>
        </TitleContainer>
      </DetailPanel>
    );
  }
}

export default TitlePanel;
