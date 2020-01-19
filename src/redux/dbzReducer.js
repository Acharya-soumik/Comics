import {
  FETCH_DBZ_REQUEST,
  FETCH_DBZ_SUCCESS,
  FETCH_DBZ_FAILURE
} from "./ActionType";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const dbzReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DBZ_REQUEST:
      console.log("request");
      return state;

    case FETCH_DBZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload
      };

    case FETCH_DBZ_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export default dbzReducer;
