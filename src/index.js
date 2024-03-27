import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./modules";
import {loggerMiddleware} from "./lib/loggerMiddleware";
import {logger} from "redux-logger/src";
import {thunk} from 'redux-thunk';


// const store = createStore( rootReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
// const store = createStore( rootReducer, applyMiddleware( loggerMiddleware ) );
const store = createStore( rootReducer, applyMiddleware( logger, thunk ) );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
