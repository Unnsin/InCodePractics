import { push } from 'react-router-redux';

import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FILTER_USER,
  MESSAGE_CLICK,
  GET_USERS,
  CLIENT_IS_LOADING,
  CLIENT_LOADING_ERROR,
  CLIENT_LOADING_SUCSSESFUL,
} from './actionTypes';


const serverDelay = 2000;
const localhost = 'http://localhost:4200';

export function setMessage() {
  return {
    type: MESSAGE_CLICK,
  };
}

export function addUser(user) {
  return (dispatch) => {
    fetch(`${localhost}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    setTimeout(() => {
      dispatch({ type: ADD_USER, user });
      dispatch(push('/'));
      dispatch(setMessage());
    }, serverDelay);
  };
}

export function deleteUser(id) {
  return (dispatch) => {
    fetch(`${localhost}/delete/${id}`)
      .then((respons) => { dispatch({ type: DELETE_USER, id }); });
  };
}

export function editUser(user) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: EDIT_USER, user });
      dispatch(push('/'));
    }, serverDelay);
  };
}
export function filterUser(search) {
  return {
    type: FILTER_USER,
    search,
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
export function startLoading() {
  return {
    type: CLIENT_IS_LOADING,
    load: true,
  };
}
export function endLoading() {
  return {
    type: CLIENT_LOADING_SUCSSESFUL,
    load: false,
  };
}
export function errorLoading() {
  return {
    type: CLIENT_LOADING_ERROR,
    load: true,
  };
}
export function loadUsers() {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(`${localhost}/users`)
      .then(res => res.json())
      .then(items => dispatch(getUsers(items)));
  };
}
