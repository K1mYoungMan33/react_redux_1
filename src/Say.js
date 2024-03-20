import {useState} from "react";

const Say = ()=>{
    const [ message, setMessage ] = useState('강');
    const onClickEnter = ()=> setMessage( '안녕하세요!' );
    const onClickLeave = ()=> setMessage( '안녕히 가세요!' );

    const [ color, setColor ] = useState( 'black' );


    const object = { a:1, b:2, c:3 };
    const nextObject = { ...object, b:4 };
    console.log( "object")
    console.log( object );
    console.log( "nextObject")
    console.log( nextObject );

    const array = [
        { id:1, value: true },
        { id:2, value: true },
        { id:3, value: false },
    ];
    let nextArray = array.concat( { id:4, value:true } );
    console.log( "array.concat" )
    console.log( array )
    console.log( nextArray )

    nextArray.filter( t=>t.id!==2);
    console.log( "nextArray.filter" )
    console.log( array )
    console.log( nextArray )

    nextArray=nextArray.filter( t=>t.id!==2);
    console.log( "nextArray=nextArray.filter" )
    console.log( array )
    console.log( nextArray )

    nextArray.map( t=>t.id===1?{ ...t, value:false}:t );
    console.log( "nextArray.map" )
    console.log( array )
    console.log( nextArray )

    nextArray=nextArray.map( t=>t.id===1?{ ...t, value:false}:t );
    console.log( "nextArray=nextArray.map" )
    console.log( array )
    console.log( nextArray )


    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>

            <h1 style={{color}}>{message}</h1>
            <button style={{color:"red"}} onClick={()=>setColor('red')}>빨간색</button>
            <button style={{color:"green"}} onClick={()=>setColor('green')}>초록색</button>
            <button style={{color:"blue"}} onClick={()=>setColor('blue')}>파랑색</button>
        </div>
    )
}

export default Say;