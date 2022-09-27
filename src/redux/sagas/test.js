import { takeLatest } from 'redux-saga/effects';
import { TEST, testAction } from './actions/test';

export default [takeLatest(TEST, testAction)];