/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable indent */
const initialState = {
  data: [],
  detail: [],
  pageInfo: {},
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_ARTICLE':
      return {
        ...state,
        data: action.payload.article,
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_NEXT_ARTICLE':
      return {
        ...state,
        data: [...state.data, ...action.payload.article],
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_GET_DETAILS_ARTICLE':
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default article;