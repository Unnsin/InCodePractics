import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';


class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: this.props.user,
    };
  }

  DelUser = () => {
    this.props.Delete(this.state.client._id);
  }

  render() {
    return (
          <Card style={{ padding: '2%' }} onClick={this.OnClick}>
              <div>
                  <Image
                    floated="right"
                    size="mini"
                    src={this.props.user.general.avatar}
                    alt="Avatar"
                  />
                  <Card.Header>
                      { this.props.user.general.firstName } { this.props.user.general.lastName }
                  </Card.Header>
                  <Card.Description>
                      { this.props.user.job.title }
                  </Card.Description>
                  <Link to={`/detail/${this.props.user._id}`}>
                      <Button floated="left" inverted color="green">Detail</Button>
                  </Link>
                  <Link
                    to={`/edit/${this.props.user._id}`}
                    onClick={this.OnClickEdit}
                  >
                      <Button floated="left" inverted color="blue">Edit</Button>
                  </Link>
                  <Button floated="left" inverted color="red" onClick={this.DelUser}>Delete</Button>
              </div>
          </Card>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
  Delete: PropTypes.func,
};

export default User;
