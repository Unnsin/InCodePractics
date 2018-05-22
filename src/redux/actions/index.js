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
  GET_USER,
} from './actionTypes';

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
    })
      .then(() => dispatch({ type: ADD_USER, user }))
      .then(dispatch(push('/')))
      .then(dispatch(setMessage()));
  };
}

export function deleteUser(id) {
  return (dispatch) => {
    fetch(`${localhost}/delete/${id}`)
      .then(() => { dispatch({ type: DELETE_USER, id }); });
  };
}

export function editUser(user) {
  return (dispatch) => {
    fetch(`${localhost}/edit/${user._id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(respons => respons.json())
      .then(respons => dispatch({ type: EDIT_USER, respons }))
      .then(dispatch(push('/')));
  };
}
export function filterUser(search) {
  return (dispatch) => {
    fetch(`${localhost}/search/${search}`)
      .then(response => response.json())
      .then(response => dispatch({ type: FILTER_USER, users: response }));
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
export function getUser(id) {
  return (dispatch) => {
    fetch(`${localhost}/user/${id}`)
      .then(respons => respons.json())
      .then(item => dispatch({ type: GET_USER, user: item }));
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
