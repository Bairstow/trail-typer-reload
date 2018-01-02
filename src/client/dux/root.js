import { combineReducers } from 'redux-immutable';

import { gameAdministrationReducer } from 'dux/gameAdministration';

const rootReducer = combineReducers({
  gameAdministrationReducer,
});

export default rootReducer;
