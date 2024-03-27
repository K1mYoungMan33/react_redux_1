import {Counter} from "../components/Counter";
import {connect, useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../modules/counter";

// const CounterContainer=( { number, increase, decrease } ) =>
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
const CounterContainer=()=>{
    const number = useSelector( state => state.counter.number );
    const dispatch = useDispatch();
    return <Counter number={number}
                    onIncrease={()=>dispatch(increase())}
                    onDecrease={()=>dispatch(decrease())}
    />
}
export default CounterContainer;
/*
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
*/