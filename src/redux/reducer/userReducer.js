import { GET_CLIENTS } from '../actions/actionTypes';

const initialState = {
  email: '',
  avatar: '',
  users: [],
};

export function userReducer(state = initialState, actions) {
  switch (actions.type) {
    case GET_CLIENTS: {
      return {
        ...state,
        users: [...actions.users],
      };
    }
    default: {
      return state;
    }
  }
}