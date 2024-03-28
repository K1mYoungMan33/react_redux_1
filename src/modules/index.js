import {combineReducers} from "redux";
import {counter, counterSaga} from "./counter";
import {sample} from "./sample";
// import {all} from "redux-saga/effects";
import {all} from "@redux-saga/core/effects";

export const rootReducer = combineReducers({
    counter,
    sample,
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
    yield all([counterSaga()]);
}
