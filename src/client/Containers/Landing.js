import React, { Component } from 'react';

import InfoPanel from 'Components/Landing/InfoPanel';
import TitlePanel from 'Components/Landing/TitlePanel';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitlePanel />
        <InfoPanel />
      </div>
    );
  }
}

export default Landing;
