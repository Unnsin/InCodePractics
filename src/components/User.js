import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            client: this.props.user,
        };
    }
  DelUser = () => {
      this.props.Delete(this.state.client.address.zipCode);
  }
  render() {
      return (
          <Card style={{padding: '2%'}} onClick={this.OnClick}>
              <div className= "content">
                  <Image floated='right' 
                      size='mini'
                      src={this.state.client.general.avatar } 
                      alt="Avatar"/>
                  <Card.Header> 
                      {this.state.client.general.firstName} {this.state.client.general.lastName}
                  </Card.Header>
                  <Card.Description>
                      {this.state.client.job.title}
                  </Card.Description>
                  <Link to={'/detail/'+this.state.client.address.zipCode}>
                      <Button inverted color='green' >Detail</Button>
                  </Link>
                  <Link to={'/edit/'+this.state.client.address.zipCode} 
                      onClick={this.OnClickEdit}>
                      <Button inverted color='blue' >Edit</Button>
                  </Link>
                  <Button inverted color='red' onClick = {this.DelUser} >Delete</Button>
              </div>
          </Card>
      );
  }
}



User.propTypes = {
    user: PropTypes.object,
    Delete: PropTypes.func
};

export default User;