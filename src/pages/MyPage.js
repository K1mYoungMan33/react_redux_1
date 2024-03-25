import {Navigate} from "react-router-dom";

export const MyPage=()=>{
    const isLoggedIn = false;

    if ( !isLoggedIn ) {
        return <Navigate to="/login" replace={true} />;
    }

    return <div>마이 페이지</div>;
}