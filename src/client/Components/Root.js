import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Navbar from 'Containers/Navbar.js';
import TestComponent from 'Components/Test';
import TestTwoComponent from 'Components/TestTwo';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/test" component={TestTwoComponent} />
        <Route path="/:filter?" component={TestComponent} />
      </div>
    </Router>
  </Provider>
);

export default Root;
