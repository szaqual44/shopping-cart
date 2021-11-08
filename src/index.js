import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'
import App from './App';
import MyTheme from './styles/myTheme'


ReactDOM.render(
  <React.StrictMode>
     <MyTheme>
        <App/> 
      </MyTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
