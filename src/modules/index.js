import {combineReducers} from "redux";
import {counter} from "./counter";
import {sample} from "./sample";

export const rootReducer = combineReducers({
    counter,
    sample,
});