import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./ActionType";

const initialState = {
  isLoading: true,
  comics: [],
  error: "",
  page: 0
};

const comicReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return state;

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        comics: action.payload
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        comics: []
      };
    default:
      return state;
  }
};

export default comicReducer;
