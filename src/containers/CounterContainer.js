import {Counter} from "../components/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";

// export const CounterContainer=()=> <Counter />;

const CounterContainer=( { number, increase, decrease } ) =>
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />;

const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispatchToProps = dispatch=> ({
    increase: ()=>
        console.log( 'increase' )||
        dispatch( increase() ),
    decrease: ()=>
        console.log( 'decrease' ) ||
        dispatch( decrease() ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps, // 두번째 인자는 bindActionCreators 
)(CounterContainer);