import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import DetailPanel from 'Components/Common/DetailPanel';
import SelectorActionButton from 'Components/Common/SelectorActionButton';

const InfoRow = styled.div`
  padding: ${spacing.x8};
  display: flex;
  flex-direction: row;
`;

const InfoText = styled.div`
  flex-grow: 1;
  padding: ${spacing.x32};
`;

const InfoTitle = styled.span`
  color: ${colors.nord13};
`;

class WelcomePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    return (
      <DetailPanel>
        <InfoRow>
          <SelectorActionButton {...selectorDefinitions[0]} />
          <InfoText>
            <InfoTitle>PRACTICE - </InfoTitle>
            <span>Play and practice typing solo.</span>
          </InfoText>
        </InfoRow>
        <InfoRow>
          <SelectorActionButton {...selectorDefinitions[1]} />
          <InfoText>
            <InfoTitle>COMPETE - </InfoTitle>
            <span>Compete live against other trail typers.</span>
          </InfoText>
        </InfoRow>
        <InfoRow>
          <SelectorActionButton {...selectorDefinitions[2]} />
          <InfoText>
            <InfoTitle>STATISTICS - </InfoTitle>
            <span>Check out your progress and statistics.</span>
          </InfoText>
        </InfoRow>
        <InfoRow>
          <SelectorActionButton {...selectorDefinitions[3]} />
          <InfoText>
            <InfoTitle>LEADERBOARDS - </InfoTitle>
            <span>View the global leaderboards and your placing among them.</span>
          </InfoText>
        </InfoRow>
      </DetailPanel>
    );
  }
}

export default WelcomePanel;
