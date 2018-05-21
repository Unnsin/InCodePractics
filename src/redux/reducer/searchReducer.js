import { FILTER_USER, MESSAGE_CLICK, GET_USER } from '../actions/actionTypes';


const initialState = {
  SearchFilter: '',
  Message: false,
  user: {},
};

export function filterReducer(state = initialState, actions) {
  switch (actions.type) {
    case FILTER_USER: {
      return {
        ...state,
        SearchFilter: actions.search,
      };
    }
    case MESSAGE_CLICK: {
      return {
        ...state,
        Message: true,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: actions.user[0],
      };
    }
    default: {
      return state;
    }
  }
}
