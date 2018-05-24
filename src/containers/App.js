import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment, Button, Divider, Dropdown, Grid, Image } from 'semantic-ui-react';
import UserList from './UserList';
import Info from './Info';
import CreateUser from './CreateUser';
import Edit from './Edit';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Sockets from './Sockets';
import StatusBar from '../components/StatusBar';


class App extends Component {
  constructor(props) {
    super(props);

    this.triger = (
      <span>
        <Image avatar />
        {localStorage.getItem('email')}
      </span>
    );
  }

  OnClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.forceUpdate();
  }

  render() {
    return (
            <div>
              <Segment>
                { !localStorage.getItem('token') ?
                (
<div>
                  <Link to="/signup">
                     <Button floated="right" inverted color="green">Sign Up</Button>
                  </Link>
                  <Link to="/signin">
                    <Button floated="right" inverted color="blue">Sign In</Button>
                  </Link>
</div>
) : (
<Dropdown trigger={this.triger} item simple direction="left">
  <Dropdown.Menu>
    <Dropdown.Item onClick={this.OnClick}>Sign Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>)
                }
                <Divider clearing />
                <Grid>
                  <Grid.Column width={6}>
                    <StatusBar />
                  </Grid.Column>
                  <Grid.Column width={4}>
                <Sockets />
                  <Route path="/" exact component={UserList} />
                  <Route path="/detail/:id" exact component={Info} />
                  <Route path="/create" exact component={CreateUser} />
                  <Route path="/edit/:id" extra component={Edit} />
                  <Route path="/signup" extra component={SignUp} />
                  <Route path="/signin" extra component={SignIn} />
                  </Grid.Column>
                </Grid>
              </Segment>
            </div>
    );
  }
}

export default App;
