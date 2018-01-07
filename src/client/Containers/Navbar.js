import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import { Bar, Divider, Filler } from 'Components/Navbar/StyledComponents';
import Logo from 'Components/Common/Logo';
import Selector from 'Components/Common/Selector';
import Menu from 'Components/Navbar/Menu';
import { LinkHome, LinkPractice } from 'Components/Common/navigationLinks';

const linkStyle = css`
  text-decoration: none;

  & :link {
    color: inherit;
  }

  & :visited {
    color: inherit;
  }
`;

const SelectorContainer = styled.div`
  height: ${spacing.x96};
  width: ${spacing.x128};
  padding-top: 24px;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectors() {
    const selectorDefinitions = [
      {
        text: 'practice',
        iconClassName: 'fas fa-chevron-circle-right',
        LinkComponent: LinkPractice,
      },
      {
        text: 'compete',
        iconClassName: 'fas fa-chevron-double-right',
        LinkComponent: LinkPractice,
      },
      {
        text: 'statistics',
        iconClassName: 'fas fa-chart-bar',
        LinkComponent: LinkPractice,
      },
      {
        text: 'leaderboards',
        iconClassName: 'far fa-globe',
        LinkComponent: LinkPractice,
      },
    ];

    const selectorRender = selectorDefinitions.map(selectorProps => {
      const { LinkComponent, text, iconClassName } = selectorProps;
      return (
        <LinkComponent>
          <SelectorContainer>
            <Selector text={text} iconClassName={iconClassName} />
          </SelectorContainer>
        </LinkComponent>
      );
    });

    return selectorRender;
  }

  render() {
    return (
      <Bar>
        <LinkHome>
          <Logo>LOGO</Logo>
        </LinkHome>
        <Divider />
        <Filler>{this.renderSelectors()}</Filler>
        <Divider />
        <Menu iconClassName={'fas fa-user'} />
        <Menu iconClassName={'fas fa-bars'} />
      </Bar>
    );
  }
}

export default Navbar;
