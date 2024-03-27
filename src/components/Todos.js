const TodoItem = ( { todo, onToggle, onRemove } ) => <div>
    <input type="checkbox"
           onClick={()=>onToggle(todo.id)}
           checked={todo.done}
           readOnly={true}
    />
    <span style={ { textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
    </span>
    <button onClick={()=>onRemove(todo.id)}>삭제</button>
</div>;

export const Todos = ( {
    input, //
    todos, //
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit=e=>{
        e.preventDefault();
        onInsert( input );
        onChangeInput( '' ); // 등록 후 인풋 초기화
    };
    const onChange=e=>onChangeInput( e.target.value );
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos&&todos.map(todo=>(
                    <TodoItem
                    todo={todo}
                    key={todo.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};