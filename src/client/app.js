import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from 'Components/Root';
import storeConfig from './config/storeConfig';

const appContainer = document.querySelector('.app');
const store = storeConfig();

ReactDOM.render(<Root store={store} />, appContainer);
