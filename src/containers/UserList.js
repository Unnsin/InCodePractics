import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Grid, Input, Button } from 'semantic-ui-react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';
import { filterUser, setMessage, loadUsers, deleteUser } from '../redux/actions/index';
import { GetSearchFilter } from '../selectors/index';

const debounceTime = 300;

class UserList extends Component {
  componentDidMount() {
    const hasFirstClient = !!this.props.clients[0];
    if (!hasFirstClient) {
      this.props.getClient();
    }
  }

  handelChange = (e) => {
    this.props.Search(e.target.value);
  }

  render() {
    return (
          <Grid>
              <Grid.Column width={6} />
              <Grid.Column width={4} style={{ paddingTop: '2%' }}>
                  <Input>
                      <DebounceInput
                        minLength={2}
                        debounceTimeout={debounceTime}
                        type="text"
                        onChange={this.handelChange}
                        value={this.props.filter}
                        placeholder="Search..."
                      />
                  </Input>
                  <Link to="/create">
                      <Button inverted color="brown">Создать Клиента</Button>
                  </Link>
                  {this.props.clients ? this.props.clients.map(item => (<User key={item.address.zipCode} user={item} Delete={this.props.Delete} />)) : (<div />) }
              </Grid.Column>
          </Grid>
    );
  }
}

UserList.propTypes = {
  clients: PropTypes.array,
  Search: PropTypes.func,
  Delete: PropTypes.func,
  filter: PropTypes.string,
  getClient: PropTypes.func,
};

const mapStateToProps = state => ({
  clients: GetSearchFilter(state),
  MessageFilter: state.filter.Message,
});

const mapDispatchToProps = dispatch => ({
  Search: bindActionCreators(filterUser, dispatch),
  MessageClick: bindActionCreators(setMessage, dispatch),
  getClient: bindActionCreators(loadUsers, dispatch),
  Delete: bindActionCreators(deleteUser, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserList);