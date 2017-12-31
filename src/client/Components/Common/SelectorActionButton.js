import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';

import { colors, spacing } from 'constants/ui';
import Selector from 'Components/Common/Selector';

const ActionButton = styled.div`
  background-color: ${colors.nord12};
  border-radius: 50%;
  height: 80px;
  width: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
`;

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
  height: 80px;
  width: 80px;
  padding-top: ${spacing.x12};
`;

class SelectorActionButton extends Component {
  static propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    iconClassName: PropTypes.string,
    urlPath: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { urlPath, text } = this.props;
    return (
      <Link to={urlPath} className={linkStyle} key={text}>
        <ActionButton>
          <SelectorContainer>
            <Selector {...this.props} />
          </SelectorContainer>
        </ActionButton>
      </Link>
    );
  }
}

export default SelectorActionButton;
