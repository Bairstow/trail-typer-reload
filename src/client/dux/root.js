import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import { gameAdministrationReducer } from 'dux/gameAdministration';

const rootReducer = combineReducers({
  gameAdministrationReducer,
  router: routerReducer,
});

export default rootReducer;
