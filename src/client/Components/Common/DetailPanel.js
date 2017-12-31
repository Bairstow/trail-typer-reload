import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

const DetailPanel = styled('div')`
  background: ${colors.nord0};
  color: ${colors.nord4};
  width: calc(100vw - ${spacing.x128});
  height: max-content;
  margin: ${spacing.x32};
  padding: ${spacing.x32};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
`;

export default DetailPanel;
