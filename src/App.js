import logo from './logo.svg';
import {Fragment, useRef} from "react";
import './App.css';
import './undefinedRender';
import UndRend from "./undefinedRender";
import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFun from "./EventPracticeFun";
import EventPracticeFun2 from "./EventPracticeFun2";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

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



    const scrollBoxRef = useRef(null);

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
              <MyComponent test={"aaaa"} name={33}  />
              <MyComponent name='홍길동' address='대구광역시' age={10}> 얖얖 </MyComponent>
              <MyComponentClass favoriteNumber={7}> 아이우에오 </MyComponentClass>
          </>
          <>
              <Say></Say>
          </>
          <>
              <EventPractice/>
          </>
          <>
              <hr/>
              <EventPracticeFun/>
          </>
          <>
              <hr/>
              <EventPracticeFun2/>
          </>
          <>
              <hr/>
              <ValidationSample/>
          </>
          <>
              <hr/>
              {/*<ScrollBox ref={(ref)=> this.scrollBox=ref}/>*/}
              <ScrollBox ref={scrollBoxRef}/>
              <button onClick={()=>scrollBoxRef.current.scrollToBottom()}>맨 밑으로</button>
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


