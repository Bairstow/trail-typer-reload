import { setGameState, setGameTextArray } from 'dux/game';
import { gameStates } from 'constants/game';
import { fetchNewGameText } from 'mock/fakeApi';

export const resetGameState = dispatch => () => {
  dispatch(setGameState(gameStates.INACTIVE));
};

export const startPracticeGame = dispatch => () => {
  dispatch(setGameState(gameStates.INITIALISING));
  const newGameText = fetchNewGameText().split('');
  dispatch(setGameTextArray(newGameText));
};
