import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import Counter from './stores/Counter';
import Users from './stores/Users';

const stores = { counter: new Counter(), users: new Users() };

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
