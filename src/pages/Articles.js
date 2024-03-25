import {Link, Outlet} from "react-router-dom";

export const Articles=()=>{
    return (
        <div>
            <Outlet/>
        <ul>
            {[ 1, 2, 3 ].map((e,i)=>
                <li>
                    <Link to={"/articles/"+e}>게시글 {e}</Link>
                </li>
            )}
        </ul>
        </div>
    )
}