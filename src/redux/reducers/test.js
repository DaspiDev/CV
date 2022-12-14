import { LOG_IN_FAILURE, LOG_IN_SUCCESS } from './actions/test';

export const INITIAL_STATE = {
  token: null,
  role: 'public',
  verified: false,
  user: {},
};

export default (state = INITIAL_STATE, { type, n }) => {
  switch (type) {
    case LOG_IN_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case LOG_IN_FAILURE:
      return { ...INITIAL_STATE, verified: true };
    default:
      return state;
  }
};