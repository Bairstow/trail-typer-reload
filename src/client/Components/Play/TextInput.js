import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import DetailPanel from 'Components/Common/DetailPanel';

class TextInput extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { directHome } = this.props;
    const testOnClick = e => {
      e.preventDefault();
      console.log('Logo clicked');
      directHome();
    };
    return <DetailPanel onClick={testOnClick}>Text Input</DetailPanel>;
  }
}

const mapDispatchToProps = dispatch => ({
  directHome: () => {
    dispatch(push('/'));
  },
});

export default connect(null, mapDispatchToProps)(TextInput);
