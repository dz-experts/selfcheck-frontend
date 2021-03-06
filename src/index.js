import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './app/routes';
import * as serviceWorker from './serviceWorker';
import './app/i18n/';

import './app/styles.sass'
import './app/rtl.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
