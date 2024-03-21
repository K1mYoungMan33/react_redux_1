import {useCallback, useRef, useState} from "react";

const getAverage=numbers=>{
    console.log( '평균값 계산 중..');
    if ( numbers.length ===0 ) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/numbers.length;
};

export const AverageNonMemo=()=>{
    const [list, setList]=useState([]);
    const [number,setNumber]=useState('');
    const inputEl = useRef(null);

    const onChange= useCallback( e=>{
        setNumber(e.target.value);
    }, []);
    const onInsert= useCallback(e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
        inputEl.current.style.backgroundColor = '#' + Math.floor( Math.random() * 16777215 ).toString( 16 );
    },[number, list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>
                    <li key={index}>{value}</li>
                )}
            </ul>
            <div>
                <b>평균값:</b>{getAverage(list)}
            </div>
        </div>
    );
}