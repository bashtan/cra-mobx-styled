import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './stores/Counter';
import Users from './stores/Users';

ReactDOM.render(
  <App counter={new Counter()} users={new Users()}/>,
  document.getElementById('root'));

registerServiceWorker();
