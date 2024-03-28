import {combineReducers} from "redux";
import {counter, counterSaga} from "./counter";
import {sample, sampleSaga} from "./sample";
// import {all} from "redux-saga/effects";
import {all} from "@redux-saga/core/effects";
import {loading} from "./loading";

export const rootReducer = combineReducers({
    counter,
    sample,
    loading,
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
    yield all([counterSaga(), sampleSaga()]);
}
