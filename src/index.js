import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { compose,applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/Store'
import appReducer from './redux/rootReducer';
import { createStoreHook, Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
const middleware = [thunk]
// const store=configureStore({
//     reducer:{
//          user:appReducer,
         
//     },
   
    
// }

//)

ReactDOM.render(
     <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
     </React.StrictMode>,
     document.getElementById('root')
   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
