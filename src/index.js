/*import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import '../src/styles/global.scss';
import 'font-awesome/css/font-awesome.min.css'; //zaimportowanie fontawesome. Jak nie podamy dokładnie, do react będzie szukał w node.modules

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
*/

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);