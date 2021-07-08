import { createStore, combineReducers } from "redux";
import stateReducer from "./ducks/Pledges";

const reducer = combineReducers({
  BackedState: stateReducer,
});

const store = createStore(reducer);

export default store;
