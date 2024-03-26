import logo from './logo.svg';
import './App.css';
import {ColorBox} from "./ColorBox";
import {ColorContext, ColorProvider} from "./color";
import {SelectColors} from "./SelectColors";

export const App=()=> <div>
    <ColorBox/>
  {/*<ColorContext.Provider value={ {state:{color: 'red'} }>*/}
  {/*    <ColorBox/>*/}
  {/*</ColorContext.Provider>*/}
    <ColorProvider>
        <SelectColors/>
        <ColorBox/>
    </ColorProvider>

</div>;