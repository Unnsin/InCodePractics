import React, { Component } from 'react';
//components 
import Detail from '../components/Detail';
import UserList from '../components/UserList';
import { Route} from 'react-router-dom';
import CreateUser from '../components/CreateUser';
import Edit from '../components/Edit';


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={UserList} />
                <Route path="/detail/:zipCode" exact component={Detail} />
                <Route path="/create" exact component={CreateUser} />
                <Route path="/edit/:zipCode" extra component={Edit} />
            </div>
        );
    }
}

export default App;
