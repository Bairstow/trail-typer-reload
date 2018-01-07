import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import { sessionReducer } from 'dux/session';
import { gameReducer } from 'dux/game';

const rootReducer = combineReducers({
  session: sessionReducer,
  game: gameReducer,
  router: routerReducer,
});

export default rootReducer;
