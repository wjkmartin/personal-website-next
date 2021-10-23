import { combineReducers } from 'redux';
import * as types from './types';

const grayscaleReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 0.05;
    case types.DECREMENT:
      return state - 0.05;
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

export default combineReducers(reducers);
