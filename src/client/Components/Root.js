import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { css } from 'react-emotion';

import Navbar from 'Containers/Navbar';
import MainPanel from 'Components/MainPanel';
import Splash from 'Components/Test';
import Play from 'Components/TestTwo';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MainPanel>
        <Navbar />
        <Route path="/splash" component={Splash} />
        <Route path="/play/:gameId?" component={Play} />
        <Route path="/statistics/:filter?" component={Splash} />
        <Route path="/leaderboards/:gameId?" component={Play} />
      </MainPanel>
    </Router>
  </Provider>
);

export default Root;
