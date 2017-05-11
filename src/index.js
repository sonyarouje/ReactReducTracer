import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

const storeEnhancer = window['devToolsExtension'] ? window['devToolsExtension']() : value => value;
let store= createStore(todoApp,storeEnhancer);

ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,  
  document.getElementById('root')
);
