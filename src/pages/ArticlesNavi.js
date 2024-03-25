import {Link, NavLink, Outlet} from "react-router-dom";

export const ArticlesNavi=()=>{
    const activeStyle={
        color: 'green',
        fontSize: 21,
    }
    return (
        <div>
            <Outlet/>
        <ul>
            {[ 1, 2, 3 ].map((e,i)=>
                <li>
                    <NavLink to={"/articlesNavi/"+e}
                             style={({ isActive } ) => (isActive ? activeStyle : undefined ) }
                             >
                    게시글 {e}</NavLink>
                </li>
            )}
        </ul>
        </div>
    )
}