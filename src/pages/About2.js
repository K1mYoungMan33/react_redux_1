import {useLocation, useSearchParams} from "react-router-dom";

export const About2=()=>{
    const [searchParams, setSearchParams]=useSearchParams();
    const detail = searchParams.get( 'detail' );
    const mode = searchParams.get( 'mode' );
    const location = useLocation();
    console.log( "location", location )

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로그램</p>
            <p>쿼리스트링: {location.search}</p>
        </div>
    )
}