import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from "react";
import axios from "axios";
import {NewsList} from "./NewsList";
import {Categories} from "./Categories";
import {Route, Routes} from "react-router-dom";
import {NewsPage} from "./NewsPage";

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

  const [category, setCategory] = useState( 'all' );
  const onSelect = useCallback( category => setCategory( category ), [] );

    return (
      <div>
        <input value={message} onChange={e=>setMessage(e.target.value)} />
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} cols={30} value={JSON.stringify(data, null, 2 )} readOnly={true} /> }
          <hr/>
        {data && <textarea rows={7} cols={30} value={JSON.stringify(data, (key,value)=>
            ( typeof value === "string" ) ? undefined : value
        , 2 )} readOnly={true} /> }
          <hr/>
        {data && <textarea rows={7} cols={30} value={JSON.stringify(data, [ "id", "title" ], 2 )} readOnly={true} /> }

          <div style={{display:"inline-block"}}>
        <Categories category={category} onSelect={onSelect} />
        <NewsList category={category} />
          </div>

          <div style={{display:"inline-block"}}>
          <Routes>
              <Route path="/" element={<NewsPage />} />
              <Route path="/:category" element={<NewsPage />} />
          </Routes>
          </div>
    </div>
  );
};