import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Segment, Button, Divider, Dropdown, Grid, Header } from 'semantic-ui-react';
import UserList from './UserList';
import Info from './Info';
import CreateUser from './CreateUser';
import Edit from './Edit';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Sockets from './Sockets';
import StatusBar from '../components/StatusBar';
import Search from '../components/Search';


class App extends Component {

  OnClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('avatar');
    this.forceUpdate();
  }

  render() {
    return (
            <div>
              <Segment>
                <Header as="h4">
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
<Dropdown text={localStorage.getItem('email')} item simple style={{ float: 'right' }}>
  <Dropdown.Menu>
    <Dropdown.Item onClick={this.OnClick}>Sign Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>)
                }
                <Search />
                </Header>
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

export default withRouter(App);
