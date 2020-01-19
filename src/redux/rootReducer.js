import { combineReducers } from "redux";
import dbzReducer from "./dbzReducer";
import comicReducer from "./comicReducer";

export const rootReducer = combineReducers({
  comic: comicReducer,
  dbz: dbzReducer
});
