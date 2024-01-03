import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./CartReducer";

const allreducers = combineReducers({
    productReducer : productReducer,
    cartReducer : cartReducer
});

export default allreducers;