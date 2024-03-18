import PropTypes from "prop-types";

function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: function() {
            console.log( this.name + ': 멍멍!');
        }
    }
}
function WhiteDog() {
    this.name = '흰둥이';
    return {
        name : '검둥이',
        bark: ()=>{
            console.log( this.name + ': 멍멍!' );
        }
    }
}

const [ blackDog, whiteDog ] = [ new BlackDog(), new WhiteDog() ];
blackDog.bark();
whiteDog.bark();


const myComponent = ()=>{
    return <div>나의 새롭고 멋진 컴포넌트</div>;
}

const myComponent2 = (props)=>{
    console.log( props );
    return <div>나의 새롭고 멋진 컴포넌트 {props.name} -- {props.address}</div>;
}


const MyComponent = ( { name, children, ...other })=>{
    console.log( other );
    return <div>나의 새롭고 멋진 컴포넌트 {name} -- {children}</div>;
}


MyComponent.defaultProps = {
    name : "기본이름",
    address : "기본주소"
}

MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}


export default MyComponent;