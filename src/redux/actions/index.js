import { push } from 'react-router-redux';
import { normalize } from 'normalizr';
import { clientsSchema, clientSchema } from '../Normalizer';
import {
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

export function signUp(user) {
  return (dispatch) => {
    fetch(`${localhost}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(respons => respons.json())
      .then(() => { dispatch(push('/')); });
  };
}

export function signIn(user) {
  return (dispatch) => {
    fetch(`${localhost}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          return res;
        }
        throw res.status;
      })
      .then(respons => respons.json())
      .then((respons) => { localStorage.setItem('token', respons.token); return respons; })
      .then(() => { dispatch(push('/')); })
      .catch(err => console.log(err));
  };
}

export function addUser(user) {
  return (dispatch) => {
    fetch(`${localhost}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res.status;
        }
        return res;
      })
      .then(res => res.json())
      .then(res => normalize(res, clientSchema))
      .then(dispatch(push('/')))
      .then(dispatch(setMessage()))
      .catch(() => { alert('У вас недостаточно прав'); });
  };
}

export function deleteUser(id) {
  return () => {
    fetch(`${localhost}/delete/${id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res.status;
        }
        return res;
      })
      .catch(() => { alert('У вас недостаточно прав'); });
  };
}

export function editUser(user) {
  return (dispatch) => {
    fetch(`${localhost}/edit/${user._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res.status;
        }
        return res;
      })
      .then(respons => respons.json())
      .then(respons => normalize(respons, clientSchema))
      .then(respons => dispatch({ type: EDIT_USER, respons }))
      .then(dispatch(push('/')))
      .catch(() => { alert('У вас недостаточно прав'); });
  };
}
export function filterUser(search) {
  return (dispatch) => {
    fetch(`${localhost}/search/${search}`)
      .then(response => response.json())
      .then(response => normalize(response, clientsSchema))
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
      .then(respons => normalize(respons, clientSchema))
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
    fetch(`${localhost}/users`)
      .then(res => res.json())
      .then(res => normalize(res, clientsSchema))
      .then(items => dispatch(getUsers(items)));
  };
}
