import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';

const Logo = styled('div')`
  width: ${spacing.x256};
  line-height: ${spacing.x64};
  text-align: center;
`;

export default Logo;
