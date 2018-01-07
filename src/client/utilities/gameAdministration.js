import { setGameState } from 'dux/gameAdministration';
import { gameStates } from 'constants/game';

export const resetGameState = dispatch => () => {
  dispatch(setGameState(gameStates.INACTIVE));
};

export const startPracticeGame = dispatch => () => {
  dispatch(setGameState(gameStates.INITIALISING));
};
