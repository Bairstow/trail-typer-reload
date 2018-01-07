import Immutable from 'immutable';

import { gameStates } from 'constants/game';

export const SET_GAME_CURRENT_POSITION = 'trailTyper/game/SET_GAME_CURRENT_POSITION';
export const SET_GAME_ERROR_COUNT = 'trailTyper/game/SET_GAME_ERROR_COUNT';
export const SET_GAME_ERROR_LOG = 'trailTyper/game/SET_GAME_ERROR_LOG';
export const SET_GAME_ID = 'trailTyper/game/SET_GAME_ID';
export const SET_GAME_PROGRESS_LOG = 'trailTyper/game/SET_GAME_PROGRESS_LOG';
export const SET_GAME_START_TIME = 'trailTyper/game/SET_GAME_START_TIME';
export const SET_GAME_STATE = 'trailTyper/game/SET_GAME_STATE';
export const SET_GAME_TEXT_ARRAY = 'trailTyper/game/SET_GAME_TEXT_ARRAY';

const initialState = Immutable.Map({
  currentPosition: 0,
  errorCount: 0,
  errorLog: Immutable.List([]),
  id: null,
  progressLog: Immutable.List([]),
  startTime: null,
  state: gameStates.INACTIVE,
  textArray: null,
});

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_CURRENT_POSITION: {
      return state.set('currentPosition', action.currentPosition);
    }
    case SET_GAME_ERROR_COUNT: {
      return state.set('errorCount', action.errorCount);
    }
    case SET_GAME_ERROR_LOG: {
      return state.set('errorLog', action.errorLog);
    }
    case SET_GAME_ID: {
      return state.set('id', action.id);
    }
    case SET_GAME_PROGRESS_LOG: {
      return state.set('progressLog', action.progressLog);
    }
    case SET_GAME_START_TIME: {
      return state.set('startTime', action.startTime);
    }
    case SET_GAME_STATE: {
      return state.set('state', action.state);
    }
    case SET_GAME_TEXT_ARRAY: {
      return state.set('textArray', action.textArray);
    }
    default: {
      return state;
    }
  }
};

export const setGameCurrentPosition = newGameCurrentPosition => ({
  type: SET_GAME_CURRENT_POSITION,
  currentPosition: newGameCurrentPosition,
});
export const setGameErrorCount = newGameErrorCount => ({
  type: SET_GAME_ERROR_COUNT,
  errorCount: newGameErrorCount,
});
export const setGameErrorLog = newGameErrorLog => ({
  type: SET_GAME_ERROR_LOG,
  errorLog: newGameErrorLog,
});
export const setGameId = newGameId => ({
  type: SET_GAME_ID,
  id: newGameId,
});
export const setGameProgressLog = newGameProgressLog => ({
  type: SET_GAME_PROGRESS_LOG,
  progressLog: newGameProgressLog,
});
export const setGameStartTime = newGameStartTime => ({
  type: SET_GAME_START_TIME,
  startTime: newGameStartTime,
});
export const setGameState = newGameState => ({
  type: SET_GAME_STATE,
  state: newGameState,
});
export const setGameTextArray = newGameTextArray => ({
  type: SET_GAME_TEXT_ARRAY,
  textArray: newGameTextArray,
});
