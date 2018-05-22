import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS, GET_USER, FILTER_USER } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  clients: {},
  ids: [],
};

export function reducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_USER: {
      console.log(actions);
      return {
        ...state,
        clients: {
          ...state.clients,
          ...actions.user.entities.client,
        },
        ids: [...state.ids, actions.user.result],
      };
    }
    case FILTER_USER: {
      return {
        ...state,
        clients: { ...actions.users.entities.client },
        ids: [...actions.users.result],
      };
    }
    case DELETE_USER: {
      const clients = { ...state.clients };
      delete clients[actions.id];
      return {
        ...state,
        clients,
        ids: [...state.ids.filter(item => item !== actions.id)],
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        clients: { ...state.clients, ...actions.respons.entities.client },
      };
    }
    case GET_USERS: {
      return {
        isLoading: true,
        clients: actions.users.entities.client,
        ids: [...actions.users.result],
      };
    }
    case GET_USER: {
      console.log(actions);
      return {
        ...state,
        clients: {
          ...actions.user.entities.client,
        },
        ids: [actions.user.result],
      };
    }
    default: {
      return state;
    }
  }
}
