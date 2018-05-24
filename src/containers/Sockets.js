import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { normalize } from 'normalizr';
// import { bindActionCreators } from 'redux';
import openSocket from 'socket.io-client';
import { EDIT_USER, DELETE_USER, ADD_USER } from '../redux/actions/actionTypes';
import { clientSchema } from '../redux/Normalizer';

const socket = openSocket(process.env.REACT_APP_SOCKET_SERVER);

class Sockets extends Component {
  constructor(props) {
    super(props);
    socket.on('edit', (data) => {
      data = normalize(data, clientSchema);
      this.props.editUser(data);
    });
    socket.on('create', (data) => {
      data = normalize(data, clientSchema);
      this.props.createUser(data);
    });
    socket.on('delete', (data) => {
      this.props.deleteUser(data);
    });
  }

  componentDidMount() {
    socket.on('connection');
  }

  render() {
    return (
        <div />);
  }
}

Sockets.propTypes = {
  editUser: PropTypes.func,
  deleteUser: PropTypes.func,
  createUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  editUser: data => dispatch({ type: EDIT_USER, respons: data }),
  deleteUser: data => dispatch({ type: DELETE_USER, id: data }),
  createUser: data => dispatch({ type: ADD_USER, user: data }),
});
export default connect(null, mapDispatchToProps)(Sockets);