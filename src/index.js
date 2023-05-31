import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Index';
//import Users from './pages/Users/index';
import GlobalStyle from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //GlobalStyle e redenizado junto ao app(html)
  <React.StrictMode>
    <Home/> <GlobalStyle/>
  </React.StrictMode>
);

