import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import { Bar, Divider, Filler } from 'Components/Navbar/StyledComponents';
import Logo from 'Components/Common/Logo';
import Selector from 'Components/Common/Selector';
import Menu from 'Components/Navbar/Menu';

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
        urlPath: 'play',
      },
      {
        text: 'compete',
        iconClassName: 'fas fa-chevron-double-right',
        urlPath: 'play',
      },
      {
        text: 'statistics',
        iconClassName: 'fas fa-chart-bar',
        urlPath: 'statistics',
      },
      {
        text: 'leaderboards',
        iconClassName: 'far fa-globe',
        urlPath: 'leaderboards',
      },
    ];

    const selectorRender = selectorDefinitions.map(selectorProps => {
      const urlString = `/${selectorProps.urlPath}`;

      return (
        <Link to={urlString} className={linkStyle} key={selectorProps.text}>
          <SelectorContainer>
            <Selector {...selectorProps} />
          </SelectorContainer>
        </Link>
      );
    });

    return selectorRender;
  }

  render() {
    return (
      <Bar>
        <Link to={'/'} className={linkStyle}>
          <Logo>LOGO</Logo>
        </Link>
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
