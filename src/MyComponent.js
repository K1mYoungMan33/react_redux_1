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


const MyComponent = ()=>{
    return <div>나의 새롭고 멋진 컴포넌트</div>;
}
export default MyComponent;