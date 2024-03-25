import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";
import {NewsList} from "./NewsList";

export const  App=()=> {
  const [ message, setMessage ] = useState( '1' );
  const [ data, setData ] = useState( null );
  const onClick= async()=>{
    try {
      // window.gv = (window.gv ? window.gv : []).concat( {message} )
      window.gv = [...( window.gv || [] ) ].concat( {message} )



      // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + {message}.message );
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${message}` );
      setData(response.data);
    }catch (e) {
      console.log( e )
    }
  }
    return (
      <div>
        <input value={message} onChange={e=>setMessage(e.target.value)} />
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2 )} readOnly={true} /> }
          <hr/>
        {data && <textarea rows={7} value={JSON.stringify(data, (key,value)=>
            ( typeof value === "string" ) ? undefined : value
        , 2 )} readOnly={true} /> }
          <hr/>
        {data && <textarea rows={7} value={JSON.stringify(data, [ "id", "title" ], 2 )} readOnly={true} /> }

        <NewsList />
    </div>
  );
};