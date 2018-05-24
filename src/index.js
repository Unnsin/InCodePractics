import React from 'react';
import * as dotenv from 'dotenv';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Store, history } from './redux/Store';

dotenv.config();

ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
