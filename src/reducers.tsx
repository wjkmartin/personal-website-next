import { combineReducers } from 'redux';
import * as types from './types';

const grayscaleReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return Math.round((state + 0.1)* 10) / 10
    case types.DECREMENT:
      return Math.round((state - 0.1)* 10) / 10
    case types.RESET:
      return 1;
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  grayscale: grayscaleReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>
