import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import testReducer from './test';

export default (history) =>
  combineReducers({
    test: testReducer,
  });