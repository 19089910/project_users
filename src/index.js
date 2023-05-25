import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //GlobalStyle e redenizado junto ao app(html)
  <React.StrictMode>
    <App /> <GlobalStyle/>
  </React.StrictMode>
);

