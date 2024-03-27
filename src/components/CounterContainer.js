import {Counter} from "./Counter";
import {connect} from "react-redux";
import {decrease, decreaseAsync, increase, increaseAsync} from "../modules/counter";

const CounterContainer = ( { number, increaseAsync, decreaseAsync } ) =>
    <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />;

export default connect(
    state => ({
        number: state.counter,
    }),
    {
        increaseAsync,
        decreaseAsync,
    }
)(CounterContainer);