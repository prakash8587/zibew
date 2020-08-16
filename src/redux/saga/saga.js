import {put, takeLatest, call} from 'redux-saga/effects';
import * as types from '../../utils/actionTypes';

function* articleSaga() {
  yield takeLatest(types.FETCH_ARTICLE, fetchArticles);
}

function* fetchArticles(actions) {
  let response = [];
  try {
    const url = 'http://firstmed.azurewebsites.net/api/GetArticles';
    const response = yield fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(actions.payload),
    });
    const res = yield response.json();
    yield put({
      type: types.FETCH_ARTICLE_SUCCESS,
      payload: res,
    });
    console.log('TCLTCL responseresponse', res);
  } catch (error) {
    yield put({
      type: types.FETCH_ARTICLE_FAILURE,
      payload: error,
    });
  }
}

// export const fetchArticlesAPI = (actions = {}) => {
//   const url = 'http://firstmed.azurewebsites.net/api/GetArticles';
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       CustomerId: 5879,
//       lastUpdatedTimeTicks: 0,
//     }),
//   })
//     .then((res) => res.json())
//     .then((resJson) => {
//       resJson;
//     })
//     .catch((err) => console.log('TCLTCL errerr', err));
// };

export default articleSaga;
