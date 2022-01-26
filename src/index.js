//Import Default React Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Main CSS File
import './index.css';

//Main App
import App from './app';

//Create ReactDOM to Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);