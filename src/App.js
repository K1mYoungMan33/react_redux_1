import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Member} from "./pages/Member";
import {Profile} from "./pages/Profile";
import {About2} from "./pages/About2";
import {Articles} from "./pages/Articles";
import {Article} from "./pages/Article";
import {Layout} from "./pages/Layout";
import {ArticlesNavi} from "./pages/ArticlesNavi";
import {NotFound} from "./pages/NotFound";
import {MyPage} from "./pages/MyPage";
import {Login} from "./pages/Login";

function App() {
  return (<>
        <Routes>
            <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/about2" element={<About2 />}/>
          <Route path="/member" element={<Member />}/>
          <Route path="/profile/:username" element={<Profile />}/>
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />

          </Route>


                <Route path="/articlesNavi" element={<ArticlesNavi />}>
                    <Route path=":id" element={<Article />} />

                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<MyPage />} />

        </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </>
  );
}

export default App;
