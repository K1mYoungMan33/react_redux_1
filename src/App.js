import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Todos} from "./components/Todos";

export const App=()=><div>
  <Counter number={0} />
  <hr />
  <Todos />
</div>;