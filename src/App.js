import logo from './logo.svg';
import './App.css';
import {TodoTemplate} from "./Todo/TodoTemplate";
import {TodoInsert} from "./Todo/TodoInsert";
import {TodoList} from "./Todo/TodoList";
import {useCallback, useRef, useState} from "react";

function createBulkTodos() {
  const array = [];
  for ( let i = 1; i <= 2500; i++ ) {
    array.push({
      id:i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}

// function todoReducer

const App=()=> {
  // const [todos, setTodos] = useState([
  //   {
  //     id:1,
  //     text: '리엑트의 기초 알아보기',
  //     checked:true,
  //   },
  //   {
  //     id:2,
  //     text: '컴포넌트 스타일링 해보기',
  //     checked:true,
  //   },
  //   {
  //     id:3,
  //     text: '일정 관리앱 만들어보기',
  //     checked:false,
  //   },
  // ]);
  const [todos, setTodos]=useState(createBulkTodos)

  // 로컬변수
  const nextId = useRef(4);
  const onInsert = useCallback(
      text => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos( todos=> todos.concat(todo));
        nextId.current += 1;
      },[]
  )

  const onRemove = useCallback(
      id => setTodos( todos => todos.filter( todo => todo.id !== id ) )
      , [],
  );

  const onToggle = useCallback(
      id => setTodos( todos =>
          todos.map( todo =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),),[],
  )

  return <TodoTemplate>Todo 앱 만들기
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>;
}
export default App;