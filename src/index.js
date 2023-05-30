import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Users from './pages/Users'
import GlobalStyle from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //GlobalStyle e redenizado junto ao app(html)
  <React.StrictMode>
    <Home/> <GlobalStyle/>
  </React.StrictMode>
);

