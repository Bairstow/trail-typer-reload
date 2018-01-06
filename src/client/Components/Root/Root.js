import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from 'config/storeConfig';
import MainPanel from 'Components/Common/MainPanel';
import Navbar from 'Containers/Navbar';
import Landing from 'Containers/Landing';
import Play from 'Containers/Play';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainPanel>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route path="/play/:gameId?" component={Play} />
        <Route path="/statistics/:filter?" component={Landing} />
        <Route path="/leaderboards/:gameId?" component={Landing} />
      </MainPanel>
    </ConnectedRouter>
  </Provider>
);

export default Root;
