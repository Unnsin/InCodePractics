import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS, GET_USER, FILTER_USER } from '../actions/actionTypes';

const initialState = [];

export function reducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_USER: {
      return [
        ...state,
        actions.user,
      ];
    }
    case FILTER_USER: {
      return [...actions.users];
    }
    case DELETE_USER: {
      return [...state.filter(item => item._id !== actions.id)];
    }
    case EDIT_USER: {
      return state.map((item) => {
        if (item._id === actions.respons._id) {
          item = actions.respons;
        }
        return item;
      });
    }
    case GET_USERS: {
      return [...actions.users];
    }
    case GET_USER: {
      return [actions.user];
    }
    default: {
      return state;
    }
  }
}
