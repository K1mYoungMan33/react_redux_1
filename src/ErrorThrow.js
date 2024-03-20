import {Component} from "react";

export default class ErrorThrow extends Component {

    render() {
        console.log( ErrorThrow, 'render' );

        return <div>
            <p>hi</p>
            <button >"onClick=()=>{this.props.missing.value}>missing"</button>
        </div>
    }
}