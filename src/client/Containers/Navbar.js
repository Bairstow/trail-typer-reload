import React, { Component } from 'react';

import { Bar, Divider, Filler } from 'Components/Navbar/StyledComponents';
import Logo from 'Components/Navbar/Logo';
import Selector from 'Components/Navbar/Selector';
import Menu from 'Components/Navbar/Menu';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectors() {
    const selectorDefinitions = [
      {
        text: 'practice',
        iconClassName: 'fas fa-chevron-circle-right',
      },
      {
        text: 'compete',
        iconClassName: 'fas fa-chevron-double-right',
      },
      {
        text: 'statistics',
        iconClassName: 'fas fa-chart-bar',
      },
      {
        text: 'leaderboards',
        iconClassName: 'far fa-globe',
      },
    ];

    const selectorRender = selectorDefinitions.map(selectorProps => (
      <Selector {...selectorProps} key={selectorProps.text} />
    ));

    return selectorRender;
  }

  render() {
    return (
      <Bar>
        <Logo>LOGO</Logo>
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
