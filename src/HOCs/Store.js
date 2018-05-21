/* eslint-disable */

import Data from '../clients.json';

const IsIncludes = -1;
const Store = {
  _handlers: [],
  _flag: '',
  Data,
  onChange(handler) {
    this._handlers.push(handler);
  },
  set(value) {
    this._flag = value;
    this._handlers.forEach(handler => handler());
  },
  GetData() {
    return this.Data;
  },
  GetUser(id) {
    return this.Data.find((el) => el.address.zipCode === id);
  },
  CreateUser(User) {
    this.Data = [...this.Data, User];
  },
  DeleteUser(User) {
    this.Data = this.Data.filter((item) => item.address.zipCode !== User);
    return this.Data;
  },
  UpdateUser(User) {
    this.Data = this.Data.map((item) => {
      if (item.address.zipCode === User.address.zipCode) {
        item = User;
      }
      return item;
    });
    return this.Data;
  },
  Search(string) {
    return this.Data.filter((item) => item.general.firstName.toLowerCase().indexOf(string.toLowerCase())>IsIncludes);
  },
};

export default Store;
