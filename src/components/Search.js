import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Input } from 'semantic-ui-react';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterUser, loadUsers } from '../redux/actions/index';

const debounceTime = 300;

class Search extends Component {
  componentDidMount() {

  }

  handelChange = (e) => {
    if (e.target.value === '') {
      this.props.getClient();
    } else {
      this.props.Search(e.target.value);
    }
  }

  render() {
    return (
<div>
                <Input focus>
                <DebounceInput
                  minLength={2}
                  debounceTimeout={debounceTime}
                  type="text"
                  onChange={this.handelChange}
                  placeholder="Search..."
                />
                </Input>
</div>);
  }
}

Search.propTypes = {
  getClient: PropTypes.func,
  Search: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  Search: bindActionCreators(filterUser, dispatch),
  getClient: bindActionCreators(loadUsers, dispatch),
});

export default connect(null, mapDispatchToProps)(Search);