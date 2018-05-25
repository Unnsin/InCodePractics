import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Card } from 'semantic-ui-react';

const paddingBar = '5%';

class StatusBar extends Component {
  componentDidMount() {
  }

  render() {
    return (
<Card raised style={{ padding: paddingBar }}>
  <Card.Content>
      <Card.Header> User Online: </Card.Header>
      {this.props.users[0] ? this.props.users.map(item => <div fluid key={item._id}>{item.Email}</div>) : <div>.....</div>}
  </Card.Content>
</Card>);
  }
}

StatusBar.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  users: state.user.users,
});

export default connect(mapStateToProps, null)(StatusBar);