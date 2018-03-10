import { put, takeLatest, call } from 'redux-saga/effects';

import { types as technologyTypes } from '../ducks/technology';

import resumeApi from '../services/api';

console.log(technologyTypes.TECHNOLOGY_REQUEST);

function* technologyWillFetch() {
  console.log('saga called');
  yield put({
    type: technologyTypes.TECHNOLOGY_SUCCESS,
  });
  try {
    const about = yield call(resumeApi.fetchData, 'skills');
    yield put({ type: technologyTypes.TECHNOLOGY_SUCCESS, technology: yield about.json() });
  } catch (e) {
    console.log(e);
  }
}

const technologySaga = [
  takeLatest(technologyTypes.TECHNOLOGY_REQUEST, technologyWillFetch),
];

export default technologySaga;