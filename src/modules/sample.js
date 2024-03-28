// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.

// import * as api from "./sample";
import * as api from "../lib/api";
import {createAction, handleActions} from "redux-actions";
import {finishLoading, startLoading} from "./loading";
import { call, put, takeLatest } from "redux-saga/effects";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 시래했을 때 다른 액션을 디스패치합니다.
// export const getPost = id => async dispatch => {
//     dispatch({type: GET_POST}); // 요청을 시작한 것을 알림
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true,
//         }); // 에러 발생
//         throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해 줌
//     }
// };
//
// export const getUsers = () => async dispatch => {
//     dispatch({type: GET_USERS}); // 요청을 시작한 것을 알림
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true,
//         }); // 에러 발생
//         throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해 줌
//     }
// }
export const getPost = createAction( GET_POST, id => id );
export const getUsers = createAction( GET_USERS );


function* getPostSaga( action ) {
    yield put( startLoading( GET_POST ) );
    // 파라미터로 action 을 받아오면 액션의 정보를 조회할 수 있습니다.
    try {
        // call 을 사용하면 Promise 를 반환하는 함수를 호출하고, 기다릴 수 있습니다.
        // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수입니다.
        const post = yield call( api.getPost, action.payload ) ; // api.getPost( action.payload ) 를 의미
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data,
        });
    } catch( e ) {
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true,
        });
    }
    yield put( finishLoading( GET_POST ) ); // 로딩 완료
}
function* getUsersSaga() {
    yield put( startLoading( GET_USERS ) );
    try {
        const users = yield call( api.getUsers );
        yield put({
            type: GET_USERS_SUCCESS,
            payload: users.data,
        });
    } catch( e ) {
        yield put({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        });
    }
    yield put( finishLoading( GET_USERS ) );
}

export function* sampleSaga() {
    yield takeLatest( GET_POST, getPostSaga );
    yield takeLatest( GET_USERS, getUsersSaga );
}

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리합니다.
const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
    post: null,
    users: null,
};

export const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true, // 요청 시작
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false, // 요청 완료
            },
            post: action.payload,
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false, // 요청 완료
            }
        }),
        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true, // 요청 시작
            }
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false, // 요청 완료
            },
            users: action.payload,
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false, // 요청 완료
            }
        }),
    },
    initialState
);