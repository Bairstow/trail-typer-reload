import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import DetailPanel from 'Components/Common/DetailPanel';

const Completed = styled.span`
  color: ${colors.nord3};
`;

const Errored = styled.span`
  background: ${colors.nord13};
  color: ${colors.nord3};
`;

const Current = styled.span`
  color: ${colors.nord6};
`;

const Remaining = styled.span`
  color: ${colors.nord4};
`;

const TextDisplayWrapper = styled(DetailPanel)`
  font-size: 20px;
`;

class TextDisplay extends Component {
  static propTypes = {
    children: PropTypes.node,
    targetText: PropTypes.array,
    currentPosition: PropTypes.number,
    inError: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  generateTextStrings() {
    const { targetText, currentPosition, inError } = this.props;
    const errorPosition = currentPosition + inError;

    const completed = targetText.slice(0, currentPosition).join('');
    const errored = targetText.slice(currentPosition, errorPosition).join('');
    const remainingText = targetText.slice(errorPosition);
    const nextSpacePosition = remainingText.findIndex(char => char === ' ');
    let current, remaining;
    if (nextSpacePosition > 0) {
      current = remainingText.slice(0, nextSpacePosition).join('');
      remaining = remainingText.slice(nextSpacePosition).join('');
    } else {
      current = remainingText.join('');
      remaining = '';
    }

    return { completed, errored, current, remaining };
  }

  render() {
    const { completed, errored, current, remaining } = this.generateTextStrings();
    return (
      <TextDisplayWrapper>
        <Completed>{completed}</Completed>
        <Errored>{errored}</Errored>
        <Current>{current}</Current>
        <Remaining>{remaining}</Remaining>
      </TextDisplayWrapper>
    );
  }
}

export default TextDisplay;
