import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

const LogoContainer = styled('div')`
  width: ${spacing.x192};
  padding-top: ${spacing.x16};
  text-align: center;
  cursor: pointer;

  path {
    fill: ${colors.nord13};
  }

  #trailIcon0 {
    fill: ${colors.nord11};
  }

  #trailIcon3,
  #trailIcon4 {
    fill: ${colors.nord12};
  }

  #trailIcon5 {
    fill: ${colors.nord7};
  }
`;

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  renderLogoSVG() {
    const svgAttributes = {
      id: 'svg2',
      xmlns: 'http://www.w3.org/2000/svg',
      height: '60',
      width: '60',
      viewBox: '0 0 100 100',
    };

    const pathDefinitions = [
      'm50 50 L 75 75 L 100 50 L 75 25z',
      'm50 0 L 64 14 L 39 39 L 25 25z',
      'm50 100 L 64 86 L 39 61 L 25 75z',
      'm65 15 L 74 24 L 49 49 L 40 40z',
      'm65 85 L 74 76 L 49 51 L 40 60z',
      'm0 50 L 14 37 L 26 50 L 14 63z',
    ];

    const pathRender = pathDefinitions.map((path, index) => {
      const pathId = `trailIcon${index}`;
      return <path key={index} id={pathId} d={path} />;
    });

    return (
      <LogoContainer>
        <svg {...svgAttributes}>
          <g>{pathRender}</g>
        </svg>
      </LogoContainer>
    );
  }

  render() {
    return this.renderLogoSVG();
  }
}

export default Logo;
