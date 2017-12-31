import React, { Component } from 'react';

import TitlePanel from 'Components/Landing/TitlePanel';
import InfoPanel from 'Components/Landing/InfoPanel';
import AboutPanel from 'Components/Landing/AboutPanel';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitlePanel />
        <InfoPanel />
        <AboutPanel />
      </div>
    );
  }
}

export default Landing;
