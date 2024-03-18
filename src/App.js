import logo from './logo.svg';
import {Fragment} from "react";
import './App.css';
import './undefinedRender';
import UndRend from "./undefinedRender";
import MyComponent from "./MyComponent";

function App() {

    console.log( "App 실행" );
    let aaaa = "반가와";

    let bbb = undefined;

    const style = {
        backgroundColor:'black',
        color:'aqua',
        fontSize:'48px',
        fontWeight:'bold',
        padding: 16
    }




  return (
      <Fragment>
      <div className="App">
          가나다라
        <img src={logo} className="App-logo" alt="logo"/>
          마바사자
          <br/>
          {aaaa}
      </div>
          <>
              {aaaa === "반가와" && <h1>반가완</h1>}
              {aaaa === "반가워" && <h1>반가원</h1>}
              {bbb || "safsdfsdf"}<br/>
              {bbb}<br/>
              {"" + bbb}<br/>
          </>
          <>
              <UndRend/>aa
          </>
          <>
              <div className="Abc" style={style}>
                  영남인재교육원.
                  <br/>
              </div>
          </>
          <>
              테스트주석
              //테스트주석
              /*테스트주석*/
              !-- 테스트주석 -->
              {/*테스트주석*/}
          </>
          <>
              <MyComponent/>
              <MyComponent test={"aaaa"}/>
          </>
      </Fragment>
  );
}

export default App;


/*
function App(){
    return (
        <div>
            Hello<b>react</b>
        </div>
    );
}

function App() {
    return React.createElement( "div", null, "Hello", React.createElement("b", null, "react"));
}
*/


