import Immutable from 'immutable';

import { gameStates } from 'constants/game';

export const SET_GAME_STATE = 'trailTyper/game/SET_GAME_STATE';

const initialState = Immutable.Map({
  gameState: gameStates.INACTIVE,
});

export const gameAdministrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_STATE: {
      return state.set('gameState', action.gameState);
    }
    default: {
      return state;
    }
  }
};

export const setGameState = newGameState => ({
  type: SET_GAME_STATE,
  gameState: newGameState,
});
