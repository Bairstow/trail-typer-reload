import React from 'react';
import { Provider } from 'react-redux';

import TestComponent from 'Components/Test.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <TestComponent />
  </Provider>
);

export default Root;
