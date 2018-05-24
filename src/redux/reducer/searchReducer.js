import { AVATAR } from '../actions/actionTypes';


const initialState = {
  avatar: '',
};

export function filterReducer(state = initialState, actions) {
  switch (actions.type) {
    case AVATAR: {
      return {
        ...state,
        Message: actions.url,
      };
    }
    default: {
      return state;
    }
  }
}
