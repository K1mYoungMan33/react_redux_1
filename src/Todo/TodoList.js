import {TodoListItem} from "./TodoListItem.js";
import './TodoList.scss'

export const TodoList=( {todos, onRemove, onToggle } )=>{
    return (
        <div className="TodoList">
            {/*{[1,1,1].map(()=><TodoListItem/>)}*/}
            {/*<TodoListItem/>*/}
            {/*<TodoListItem/>*/}
            {/*<TodoListItem/>*/}
            {todos.map(todo=>(
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    )
}