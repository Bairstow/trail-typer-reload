import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { css } from 'react-emotion';

import MainPanel from 'Components/Common/MainPanel';
import Navbar from 'Containers/Navbar';
import Landing from 'Containers/Landing';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MainPanel>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route path="/play/:gameId?" component={Landing} />
        <Route path="/statistics/:filter?" component={Landing} />
        <Route path="/leaderboards/:gameId?" component={Landing} />
      </MainPanel>
    </Router>
  </Provider>
);

export default Root;
