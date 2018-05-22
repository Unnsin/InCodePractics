import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import SignInForm from '../components/SignInForm';
import { signIn } from '../redux/actions/index';


class SignIn extends Component {
  componentDidMount() {

  }

  render() {
    return (<SignInForm SignIn={this.props.signIn} />);
  }
}
SignIn.propTypes = {
  signIn: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({ signIn: bindActionCreators(signIn, dispatch) });

export default connect(null, mapDispatchToProps)(SignIn);