import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import { Provider } from 'react-redux'

// src/index.js
import Analytics from '@aws-amplify/analytics';
// ...
Analytics.autoTrack('pageView', {
  enable: true,
  type: 'SPA',
});

const rootElement = document.getElementById("root");
ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
