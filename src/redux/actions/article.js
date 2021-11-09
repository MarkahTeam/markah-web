/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
import { http } from '../../helpers/http';
const { REACT_APP_URL: URL } = process.env;
console.log(URL);

const getArticles = (url) => {
  if (!url) {
    return async (dispatch) => {
      const {
        data
      } = await http().get(`${URL}/article`);
      dispatch({
        type: 'SET_GET_ARTICLE',
        payload: {
          article: data.results,
          pageInfo: data.pageInfo
        },

      });
      console.log(data);
    };
  } else {
    return async (dispatch) => {
      const {
        data
      } = await http().get(url);
      dispatch({
        type: 'SET_NEXT_ARTICLE',
        payload: {
          article: data.results,
          pageInfo: data.pageInfo
        },
      });
    };
  }
};

const getDetailArticle = (id) => {
  return async (dispatch) => {
    const {
      data
    } = await http().get(`${URL}/article/${id}`);
    dispatch({
      type: 'SET_GET_DETAILS_ARTICLE',
      payload: data.results,
    });
    console.log('data: ', data);
  };
};

export {
  getArticles,
  getDetailArticle,
};