import inventoryReducer from "./inventoryReducer";
import workerReducer from "./workerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  information: workerReducer,
  inventory: inventoryReducer,
});

export default rootReducer;
