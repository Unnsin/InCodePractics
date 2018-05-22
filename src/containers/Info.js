import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Detail from '../components/Detail';
import { getUser } from '../redux/actions/index';


class Info extends Component {
  componentDidMount() {
    if (!this.props.clients[0]) {
      this.props.getUser(this.props.match.params.id);
    }
  }

  DisplayUser = id => this.props.clients.find(item => item._id === id);

  render() {
    return (
            <div>
                { this.props.clients[0] ? <Detail client={this.DisplayUser(this.props.match.params.id)} /> : <div /> }
            </div>
    );
  }
}

Info.propTypes = {
  getUser: PropTypes.func,
  clients: PropTypes.array,
  match: PropTypes.object,
};
const mapStateToProps = state => ({ clients: state.clients });

const mapDispatchToProps = dispatch => ({ getUser: bindActionCreators(getUser, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Info);
