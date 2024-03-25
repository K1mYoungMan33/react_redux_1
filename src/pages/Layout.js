import {Link, Outlet} from "react-router-dom";

export const Layout=()=>{
    return(
        <div>
            <header style={{background:'lightgray',padding:16,fontsize:24}}>
                Header
                <Link to="/">홈으로</Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}