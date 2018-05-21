import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Detail from '../components/Detail';
import UserList from './UserList';

import CreateUser from './CreateUser';
import Edit from './Edit';


class App extends Component {
  render() {
    return (
            <div>
                <Route path="/" exact component={UserList} />
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/create" exact component={CreateUser} />
                <Route path="/edit/:id" extra component={Edit} />
            </div>
    );
  }
}

export default App;
