import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import { bindActionCreators } from 'redux';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

class Sockets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    socket.on('message', (payload) => {
      this.setState({ message: payload });
    });
  }

  componentDidMount() {
    socket.on('connection');
  }

  Message = () => {
    console.log('Click');
    socket.emit('message', 'Hello');
  }

  render() {
    return (
        <div>
                <button onClick={this.Message}> Socketc</button>
                <div>{this.state.message}</div>
        </div>);
  }
}

export default connect(null, null)(Sockets);