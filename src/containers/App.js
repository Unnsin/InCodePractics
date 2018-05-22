import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment, Button, Divider } from 'semantic-ui-react';
import UserList from './UserList';
import Info from './Info';
import CreateUser from './CreateUser';
import Edit from './Edit';
import SignUp from './SignUp';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
            <div>
              <Segment>
                <Link to="/signup">
                  <Button floated="right" inverted color="green">Sign Up</Button>
                </Link>
                <Link to="/signin">
                  <Button floated="right" inverted color="blue">Sign In</Button>
                </Link>
                <Divider clearing />
                <Route path="/" exact component={UserList} />
                <Route path="/detail/:id" exact component={Info} />
                <Route path="/create" exact component={CreateUser} />
                <Route path="/edit/:id" extra component={Edit} />
                <Route path="/signup" extra component={SignUp} />
                <Route path="/signin" extra component={SignIn} />
              </Segment>
            </div>
    );
  }
}

export default App;
