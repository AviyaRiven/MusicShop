import {createStore} from "redux";
import allreducers from "./reducers/combineReducers";

const store = createStore(
    allreducers
);

store.getState();

export default store;