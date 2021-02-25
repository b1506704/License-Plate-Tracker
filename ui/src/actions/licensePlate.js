import { FETCH_ALL } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getLD = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLP();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
