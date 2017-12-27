import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

export const Bar = styled('div')`
  background: ${colors.nord0};
  color: ${colors.nord4};
  height: ${spacing.x64};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  display: flex;
  flex-direction: row;
`;

export const Divider = styled('div')`
  background: ${colors.nord13};
  height: ${spacing.x32};
  width: ${spacing.x1};
  margin-top: ${spacing.x16};
`;

export const Filler = styled('div')`
  height: ${spacing.x64};
  flex-grow: 1;
`;
