import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from 'dux/root';

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const storeConfig = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(historyMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  return store;
};

export default storeConfig;
