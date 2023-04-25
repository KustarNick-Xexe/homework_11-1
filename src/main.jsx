import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import factsReducer from './factsSlice';
//import { createLogger }from 'redux-logger';

const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
  //middleware: createLogger,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
