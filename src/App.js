import logo from './logo.svg';
import './App.css';

function App() {

    console.log( "App 실행" );
    let aaaa = "반가와";





  return (
      <div className="App">
          가나다라
        <img src={logo} className="App-logo" alt="logo"/>
          마바사자
          <br/>
          {aaaa}
      </div>
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


