import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Member} from "./pages/Member";
import {Profile} from "./pages/Profile";

function App() {
  return (<>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/member" element={<Member />}/>
          <Route path="/profile/:username" element={<Profile />}/>

        </Routes>
      </>
  );
}

export default App;
