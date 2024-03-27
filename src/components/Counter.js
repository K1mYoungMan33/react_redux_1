export const Counter = ( { onIncrease, onDecrease, number } ) => <div>
    <h1>{number}</h1>
    <button onClick={onIncrease}>+1</button>
    <button onClick={onDecrease}>-1</button>
</div>;