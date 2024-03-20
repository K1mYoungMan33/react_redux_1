import {Component} from "react";


class EventPractice extends Component {

    state= {message:"aaa"};

    render() {

        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type={'text'}
                       name={'message'}
                       placeholder={'아무거나 입력'}
                       onChange={
                           (e)=>{
                               console.log(e)
                               // window?.gv?.push(e)
                               window.myValueArray = (window.myValueArray ? window.myValueArray : []).concat( [e] )

                           }}
                           value={this.state.message}
                       />
                <button onClick={
                ()=>{
                    console.log( "button->" + this.state.message)
                }}/>

            </div>
        )
    }
}

export default EventPractice;