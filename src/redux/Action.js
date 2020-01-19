import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_DBZ_FAILURE,
  FETCH_DBZ_SUCCESS,
  FETCH_DBZ_REQUEST
} from "./ActionType";

import axios from "axios";

export const fetchUserRequest = item => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = item => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: item
  };
};

export const fetchUserFailure = item => {
  return {
    type: FETCH_USER_FAILURE,
    payload: item
  };
};

export const fetchDbzRequest = item => {
  return {
    type: FETCH_DBZ_REQUEST
  };
};

export const fetchDbzSuccess = item => {
  return {
    type: FETCH_DBZ_SUCCESS,
    payload: item
  };
};

export const fetchDbzFailure = item => {
  return {
    type: FETCH_DBZ_FAILURE,
    payload: item
  };
};

export const fetchComic = item => {
  return dispatch => {
    dispatch(() => fetchUserRequest());
    axios({
      url: item + "/info.0.json",
      baseURL: "https://cors-anywhere.herokuapp.com/https://xkcd.com/"
    })
      .then(res => {
        const data = res.data;
        dispatch(fetchUserSuccess(data));
      })
      .catch(error => {
        const message = error.message;
        dispatch(fetchUserFailure(message));
      });
  };
};

export const fetchDbz = item => {
  console.log(item);
  return dispatch => {
    dispatch(() => fetchDbzRequest());
    axios({
      url: item,
      baseURL: "https://dragon-ball-api.herokuapp.com/api/"
    })
      .then(res => {
        const data = res.data;
        dispatch(fetchDbzSuccess(data));
      })
      .catch(error => {
        const message = error.message;
        dispatch(fetchDbzFailure(message));
      });
  };
};
