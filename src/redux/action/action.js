import * as types from '../../utils/actionTypes';

export const fetchArticleList = (data) => ({
  type: types.FETCH_ARTICLE,
  payload: data,
});
