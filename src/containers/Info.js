import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Detail from '../components/Detail';
import { getUser } from '../redux/actions/index';


class Info extends Component {
  componentDidMount() {
    if (!this.props.ids[0]) {
      this.props.getUser(this.props.match.params.id);
    }
  }

  render() {
    return (
            <div>
                { this.props.ids[0] ? <Detail client={this.props.clients[this.props.match.params.id]} /> : <div /> }
            </div>
    );
  }
}

Info.propTypes = {
  getUser: PropTypes.func,
  clients: PropTypes.object,
  match: PropTypes.object,
  ids: PropTypes.array,
};
const mapStateToProps = state => ({ clients: state.clients.clients, ids: state.clients.ids });

const mapDispatchToProps = dispatch => ({ getUser: bindActionCreators(getUser, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Info);
