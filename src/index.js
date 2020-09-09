import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.css';

import AppRouter from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
