import {Todos} from "../components/Todos";
import {connect, useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import {useCallback} from "react";
import useActions from "../lib/useActions";
import React from 'react';

const TodosContainer=(
// { input, todos, changeInput, insert, toggle, remove, }
) => {
    const { input, todos } = useSelector( ({todos}) => ({
        input : todos.input,
        todos: todos.todos,
    }));
    /*
    const dispatch = useDispatch();
    const onChangeInput = useCallback( input=>
        dispatch( changeInput(input))
        , [ dispatch ]
    );
    const onInsert = useCallback( text =>
        dispatch( insert(text))
        , [ dispatch]
    );
    const onToggle = useCallback( id =>
        dispatch( toggle( id ))
        , [ dispatch ]
    );
    const onRemove = useCallback( id =>
        dispatch( remove( id ) )
        , [ dispatch ]
    );
    */
    const [ onChangeInput, onInsert, onToggle, onRemove ] = useActions(
        [changeInput, insert, toggle, remove ],
        []
    )

    return (
        <Todos
            input={input}
            todos={todos}
            // onChangeInput={changeInput}
            // onInsert={insert}
            // onToggle={toggle}
            // onRemove={remove}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
            />
    );
};
export default React.memo(TodosContainer);
/*
export default connect(
    // 비구조화 할당을 통해 todos 를 분리하여
    // state.todos.input 대신 todos.input 을 사용
    ( { todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);
*/