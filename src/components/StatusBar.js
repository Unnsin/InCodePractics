import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class StatusBar extends Component {
  componentDidMount() {
  }

  render() {
    return (
<div>
      {this.props.users[0] ? this.props.users.map(item=>{return <div key={item._id}>{item.Email}</div>}) : <div>.....</div>}
</div>);
  }
}

StatusBar.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  users: state.user.users,
});

export default connect(mapStateToProps, null)(StatusBar);