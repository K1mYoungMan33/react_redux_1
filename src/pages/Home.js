import {Link} from "react-router-dom";

export const Home=()=>{
    return (
        <div>
            <Link to="/about">소개</Link>
            <h1>홈</h1>
            <p>가장 먼저 나오는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to={'/about'}>소개</Link>
                </li>
                <li>
                    <a href={'profile/gildong'}>a태그로 링크</a>
                </li>
                <li>
                    <Link to={'profile/gildong'}>홍길동 프로필</Link>
                </li>
                <li>
                    <Link to={'profile/chio'}>최씨 프로필</Link>
                </li>
            </ul>
        </div>
    )
}