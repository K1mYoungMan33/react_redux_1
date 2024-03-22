import logo from './logo.svg';
import {Fragment, useRef, useState} from "react";
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
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import ErrorThrow from "./ErrorThrow";
import Info from "./Info";
import Counter from "./Counter";
import {AverageNonMemo} from "./AverageNonMemo";
import {InfoHook} from "./InfoHook";
import {SassComponent} from "./styles/SassComponent";
import {CSSModules} from "./styles/CSSModules";
import {StyledComponent} from "./styles/StyledComponent";

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


    function getRandomColor() {
        return '#' + Math.floor( Math.random() * 16777215 ).toString( 16 );
    }

    // let randomColor = { color : '' };
    const [ randomColor, setRandomColor ] = useState( { color : '' } );

    const handleClick=()=>{
        setRandomColor( {
            color: getRandomColor()
        });
    }

    const [visible, setVisible] = useState( false );

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
          <>
              <hr/>
              <IterationSample/>
          </>
          <>
              <LifeCycleSample/>
          </>
          <>
              <button onClick={handleClick}>랜덤 색상</button>
              <LifeCycleSample color={randomColor.color}/>
              <ErrorBoundary>
                  <ErrorThrow/>
              </ErrorBoundary>
          </>
          <>
              <Info/>
              <button onClick={()=>{
                  setVisible(!visible);
              }}
                      >{visible?'숨기기':'보이기'}</button>
              <hr/>
              {visible&&<Info/>}
          </>
          <>
              <Counter/>
          </>
          <>
              <AverageNonMemo/>
          </>
          <>
              <InfoHook/>
          </>
          <>
              <SassComponent/>
          </>
          <>
              <CSSModules/>
          </>
          <>
              <StyledComponent/>
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



const uniq = array => array.filter( (v,i,self)=>self.indexOf(v) ===i);
console.log( uniq( [2,1,2,3,4,3,4]))

const set = new Set( [1,2,3]);
console.log( Object.getOwnPropertyDescriptor( Set.prototype, 'size' ) )
// set.size=10;
console.log( set.size );


set.add(NaN).add(NaN);
set.add(0).add(-0);

set.add(1)
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(()=>{});

console.log( Symbol.iterator in set ) ;

const setA = new Set( [1,2,3,4]);
const setB = new Set( [2,4]);
console.log( setA.intersection(setB) );
console.log( setA.union(setB) );
console.log( setA.difference(setB) );
// console.log( setA.isSuperset(setB) );






