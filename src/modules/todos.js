import {createAction, handleActions} from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// export const changeInput = input => ({ type: CHANGE_INPUT, input });
export const changeInput = createAction(CHANGE_INPUT, input=>input);

let id = 3; // insert 가 호출될 때 마다 1씩 더해집니다.
 const insert2 = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false,
    }
});
export const insert = createAction( INSERT, text => ({
    id: id++,
    text,
    done: false,
}))


// export const toggle = id => ({ type: TOGGLE, id });
export const toggle = createAction( TOGGLE, id=>id );

// export const remove = id => ({ type: REMOVE, id });
export const remove = createAction( REMOVE, id=>id );

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        },
    ]
};

// export default function todos(state = initialState, action) {
export const todos = handleActions(
    // switch ( action.type ) {
    {
        // case CHANGE_INPUT:
        //     return {
        //         ...state,
        //         input: action.input
        //     };
        [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
        // case INSERT:
        //     return {
        //         ...state,
        //         todos: state.todos.concat( action.todo )
        //     };
        [INSERT]: (state, action) => ({ ...state, todos:state.todos.concat( action.payload )}),
        // case TOGGLE:
        //     return {
        //         ...state,
        //         todos: state.todos.map( todo =>
        //             todo.id === action.id ? { ...todo, done: !todo.done } : todo
        //         )
        //     };
        [TOGGLE]: (state, action) => ({ ...state, todos:state.todos.map( todo=>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo )}),
        // case REMOVE:
        //     return {
        //         ...state,
        //         todos: state.todos.filter( todo => todo.id !== action.id )
        //     };
        [REMOVE]: (state, action) => ({ ...state, todos: state.todos.filter( todo => todo.id !== action.payload )}),
        // default:
        //     return  state;
    }, initialState )
