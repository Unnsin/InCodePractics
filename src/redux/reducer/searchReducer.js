import { MESSAGE_CLICK } from '../actions/actionTypes';


const initialState = {
  Message: false,
};

export function filterReducer(state = initialState, actions) {
  switch (actions.type) {
    case MESSAGE_CLICK: {
      return {
        ...state,
        Message: true,
      };
    }
    default: {
      return state;
    }
  }
}
