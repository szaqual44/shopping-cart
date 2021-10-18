import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyTheme from './customTheme/myTheme'

ReactDOM.render(
  <React.StrictMode>
     <MyTheme>
        <App/> 
      </MyTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
