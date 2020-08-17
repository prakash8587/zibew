import * as types from '../../utils/actionTypes';

const INITIAL_STATE = {
  articlelistData: [],
  isLoading: true,
  fetchArticleStatus: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ARTICLE:
      return {
        ...state,
        isLoading: true,
      };

    case types.FETCH_ARTICLE_SUCCESS:
      console.log('ActionAction', action);
      return {
        ...state,
        isLoading: false,
        articlelistData:
          action.payload &&
          action.payload.Response &&
          action.payload.Response.articles,
        fetchArticleStatus: 'success',
      };

    case types.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        articlelistData: [],
        fetchArticleStatus: 'fail',
      };
    default:
      return state;
  }
};
