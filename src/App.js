import logo from './logo.svg';
import './App.css';
import {ColorBox} from "./ColorBox";
import {ColorContext} from "./color";

export const App=()=> <div>
  <ColorContext.Provider value={{color: 'red'}}>
      <ColorBox/>
  </ColorContext.Provider>
  <ColorBox/>
</div>;