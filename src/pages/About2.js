import {useLocation, useSearchParams} from "react-router-dom";

export const About2=()=>{
    const [searchParams, setSearchParams]=useSearchParams();
    const detail = searchParams.get( 'detail' ) || '';
    const mode = searchParams.get( 'mode' ) || '';
    const location = useLocation();
    console.log( "location", location )

    const onToggleDetail=()=>{
        setSearchParams({ mode, detail: detail ==='true' ? false : true } );
    }
    const onIncreaseMode=()=>{
        // const nextMode= (!mode) ?1:parseInt(mode)+1;
        const nextMode= parseInt(mode)+1||1;
        console.log( mode, nextMode, !mode )
        setSearchParams({ mode: nextMode, detail})
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로그램</p>
            <p>쿼리스트링: {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}> Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1 </button>
        </div>
    )
}