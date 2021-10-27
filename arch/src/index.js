import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import MyTheme from './styles/myTheme'
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
     <MyTheme>
        <App/> 
      </MyTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
