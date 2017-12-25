import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const RedDiv = styled('div')`
  background: #aaa;
  color: #222;
`;

class TestComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RedDiv>Test Component</RedDiv>;
  }
}

export default TestComponent;
