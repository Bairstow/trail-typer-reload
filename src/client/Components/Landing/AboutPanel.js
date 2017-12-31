import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import DetailPanel from 'Components/Common/DetailPanel';

const AboutText = styled.div`
  color: ${colors.nord7};
  text-align: center;
`;

class AboutPanel extends Component {
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
        <AboutText>
          Trail typer is a place to practice and compete in timed typing exercises, as well as track
          your typing progress and tendencies compared to your past performance and to those around
          the world.
        </AboutText>
      </DetailPanel>
    );
  }
}

export default AboutPanel;
