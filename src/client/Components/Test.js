import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const TestDiv = styled('div')`
  background: #aaa;
  color: #222;
`;

class TestComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TestDiv>Test Component</TestDiv>;
  }
}

export default TestComponent;
