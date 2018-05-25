import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';
import { loadUsers, deleteUser } from '../redux/actions/index';

const ButtonMargin = '4rem';

class UserList extends Component {
  componentDidMount() {
    const hasFirstClient = !!this.props.ids[1];
    if (!hasFirstClient) {
      this.props.getClients();
    }
  }

  render() {
    return (
          <Grid>
                  <Link to="/create">
                      <Button inverted color="brown" style={{ marginLeft: ButtonMargin }}>Создать Клиента</Button>
                  </Link>
      { this.props.loading ? this.props.ids.map(item => (<User key={this.props.clients[item]._id} user={this.props.clients[item]} Delete={this.props.Delete} />)) : (<div />) }
          </Grid>
    );
  }
}

UserList.propTypes = {
  clients: PropTypes.object,
  Delete: PropTypes.func,
  getClients: PropTypes.func,
  ids: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  clients: state.clients.clients,
  ids: state.clients.ids,
  MessageFilter: state.filter.Message,
  loading: state.clients.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getClients: bindActionCreators(loadUsers, dispatch),
  Delete: bindActionCreators(deleteUser, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
