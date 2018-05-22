import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserList from './UserList';
import Info from './Info';
import CreateUser from './CreateUser';
import Edit from './Edit';


class App extends Component {
  render() {
    return (
            <div>
                <Route path="/" exact component={UserList} />
                <Route path="/detail/:id" exact component={Info} />
                <Route path="/create" exact component={CreateUser} />
                <Route path="/edit/:id" extra component={Edit} />
            </div>
    );
  }
}

export default App;
