import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import SignUpForm from '../components/SignUpForm';
import { signUp } from '../redux/actions/index';

class SignUp extends Component {
  componentDidMount() {

  }

  render() {
    return (<SignUpForm SignUp={this.props.signUp} />);
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({ signUp: bindActionCreators(signUp, dispatch) });

export default connect(null, mapDispatchToProps)(SignUp);