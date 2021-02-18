import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import gameDetailsReducer from "./gameDetailsReducer";

const rootReducer = combineReducers({
  games: gameReducer,
  details: gameDetailsReducer,
});

export default rootReducer;
