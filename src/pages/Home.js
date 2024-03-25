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
                    <Link to={'/about2'}>소개2</Link>
                </li>
                <li>
                    <a href={'profile/gildong'}>a태그로 링크</a>
                </li>
                {[ { address:'gildong', text:'홍길동 프로필'},
                    { address:'chio', text:'최씨 프로필'},
                ].map((e,i)=>
                    <li>
                        <Link to={'profile/'+e.address}>{e.text}</Link>
                    </li>
                )}
                <li>
                    <Link to={'profile/gildong'}>홍길동 프로필</Link>
                </li>
                <li>
                    <Link to={'profile/chio'}>최씨 프로필</Link>
                </li>
                <li>
                    <Link to="articles">게시글 목록</Link>
                </li>
                <li>
                    <Link to="articlesNavi">게시글 목록(Navi)</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/mypage">mypage</Link>
                </li>
            </ul>
        </div>
    )
}