import { createStore, combineReducers } from "redux";
import stateReducer from "./ducks/Pledges";
import showModalReducer from "./ducks/ShowModals";

const reducer = combineReducers({
  BackedState: stateReducer,
  showModalReducers: showModalReducer,
});

const store = createStore(reducer);

export default store;
