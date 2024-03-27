import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Todos} from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

export const App=()=><div>
  <Counter number={0} />
  <Todos />
  <CounterContainer />
  <hr />
  <TodosContainer />
</div>;