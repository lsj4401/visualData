import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppContainer} from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppContainer>
  <App />
  </AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>, document.getElementById('root'));
  });
}

registerServiceWorker();


