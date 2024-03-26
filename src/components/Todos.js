const TodoItem = ( { todo, onToggle, onRemove } ) => <div>
    <input type="checkbox" />
    <span>예제 텍스트</span>
    <button>삭제</button>
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
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};