import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../../containers/App';
import registerServiceWorker from '../../registerServiceWorker';
import { Store, history } from '../../redux/Store';
import UserList from '../../containers/UserList';
import CreateUser from '../../containers/CreateUser';

describe('describe', () => {
  it('renders index without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <Provider store={Store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
      , div,
    );
    registerServiceWorker();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render userlist without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={Store}>
                <ConnectedRouter history={history}>
                    <UserList />
                </ConnectedRouter>
                    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render createuser without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={Store}>
                <ConnectedRouter history={history}>
                    <CreateUser />
                </ConnectedRouter>
                    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
