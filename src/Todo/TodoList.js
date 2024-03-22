import TodoListItem from "./TodoListItem.js";
import './TodoList.scss'
import {useCallback} from "react";
import {List} from "react-virtualized";

export const TodoList=( {todos, onRemove, onToggle } )=> {


    // return <div className="TodoList">
    //     {/*{[1,1,1].map(()=><TodoListItem/>)}*/}
    //     {/*{[..."123"].map(()=><TodoListItem/>)}*/}
    //     {/*<TodoListItem/>*/}
    //     {/*<TodoListItem/>*/}
    //     {/*<TodoListItem/>*/}
    //     {todos.map(todo => (
    //         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
    //     ))}
    // </div>

    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
        },[onRemove, onToggle, todos]
    )
    return (
        <List
            className={"TodoList"}
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    )
}