import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

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
        // // case CHANGE_INPUT:
        // //     return {
        // //         ...state,
        // //         input: action.input
        // //     };
        // [CHANGE_INPUT]: (state, {payload:input} ) => ({ ...state, input: input }),
        [CHANGE_INPUT]: (state, {payload:input} ) => produce( state, draft => { draft.input = input }),
        // // case INSERT:
        // //     return {
        // //         ...state,
        // //         todos: state.todos.concat( action.todo )
        // //     };
        // [INSERT]: (state, {payload:todo} ) => ({ ...state, todos:state.todos.concat( todo )}),
        [INSERT]: (state, {payload:todo} ) => produce(state, draft=> { draft.todos.push( todo )}),
        // // case TOGGLE:
        // //     return {
        // //         ...state,
        // //         todos: state.todos.map( todo =>
        // //             todo.id === action.id ? { ...todo, done: !todo.done } : todo
        // //         )
        // //     };
        // [TOGGLE]: (state, {payload:id} ) => ({ ...state, todos:state.todos.map( todo=>
        //     todo.id === id ? { ...todo, done: !todo.done } : todo )}),
        [TOGGLE]: (state, {payload:id} ) => produce( state, draft=> {
            const todo = draft.todos.find( inTodo => inTodo.id === id);
            todo.done = !todo.done;
        }),
        // // case REMOVE:
        // //     return {
        // //         ...state,
        // //         todos: state.todos.filter( todo => todo.id !== action.id )
        // //     };
        // [REMOVE]: (state, {payload:id }) => ({ ...state, todos: state.todos.filter( todo => todo.id === id )}),
        [REMOVE]: (state, {payload:id }) => produce( state, draft=> {
            const index = draft.todos.findIndex(todo => todo.id === id);
            draft.todos.splice(index, 1);
        }),
        // default:
        //     return  state;
    }, initialState )
