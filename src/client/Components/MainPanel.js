import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors } from 'constants/ui';

const MainPanel = styled('div')`
  background: ${colors.nord1};
  color: ${colors.nord4};
  width: 100vw;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

export default MainPanel;
