/* eslint-disable */
import React from 'react';
import Store from './Store';

function DataSource(Component) {
  return class EditUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clients: Store.GetData(),
      };
    }

        Get = (id) => Store.GetUser(id)

        UpdateData = (User) => {
          Store.UpdateUser(User);
        }

        DeleteData = (user) => Store.DeleteUser(user)

        CreateData = (User) => {
          Store.CreateUser(User);
        }

        Search = (string) => Store.Search(string)

        render() {
          return (
<Component
                {...this.props} 
                Data={this.state.clients} 
                Update = {this.UpdateData} 
                Delete = {this.DeleteData} 
                Create = {this.CreateData} 
                Get = {this.Get}
                Search = {this.Search}
            />
);
        }
  };
}

export default DataSource;
