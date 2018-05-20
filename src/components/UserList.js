import React, { Component } from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import { Grid, Input, Button,Message } from 'semantic-ui-react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterUser, setMessage, loadUsers, deleteUser} from '../redux/actions/index';
import { GetSearchFilter } from '../selectors/index';
import { bindActionCreators } from 'redux';


const debounceTime = 300;


class UserList extends Component {
    componentDidMount(){
        if(!this.props.clients[0]){
            this.props.getClient();}
    }
  handelChange = (e)=> {
      this.setState({
          inputValue:e.target.value,
          clients: this.props.Search(e.target.value)
      });
  }   
  MessegClick = ()=>{
      this.props.MessageClick();
  }
  message = (<Message positive onClick={this.MessegeClick}>
      <Message.Header>Пользователь успешно создан</Message.Header>
        Теперь он отображаеться в полном списке клиентов
  </Message>)
  render() {
      return (
          <Grid>
              <Grid.Column width={6} />
              <Grid.Column width={4} style={{paddingTop:'2%'}}>
                  {this.props.MessageFilter ? this.message : <div></div>}
                  <Input>
                      <DebounceInput
                          minLength={2}
                          debounceTimeout={debounceTime}
                          type="text"
                          onChange = {this.handelChange}
                          value = {this.props.filter}
                          placeholder="Search..."
                      />
                  </Input>
                  <Link to="/create">
                      <Button inverted color="brown">Создать Клиента</Button>
                  </Link>
                  {this.props.clients ? this.props.clients.map((item)=><User key = {item.address.zipCode} user={ item } Delete={this.props.Delete}/>):<div></div>}
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
    MessageFilter: PropTypes.bool,
    MessageClick: PropTypes.func,
    getClient: PropTypes.func
};


const mapStateToProps = (state)=>{
    return {
        clients:GetSearchFilter(state),
        MessageFilter: state.filter.Message
    };
};


const mapDispatchToProps = (dispatch) =>{
    return{
        Search:bindActionCreators(filterUser,dispatch),
        MessageClick:bindActionCreators(setMessage,dispatch),
        getClient:bindActionCreators(loadUsers,dispatch),
        Delete:bindActionCreators(deleteUser,dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);