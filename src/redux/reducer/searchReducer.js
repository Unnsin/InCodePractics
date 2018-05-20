import { FILTER_USER, MESSAGE_CLICK } from '../actions/actionTypes';



const initialState = {
    SearchFilter: '',
    Message: false
};

export function filterReducer (state=initialState,actions){
    switch(actions.type){
    case FILTER_USER:{
        return{
            ...state,
            SearchFilter: actions.search
        };
    }
    case MESSAGE_CLICK:{
        return{
            ...state,
            Message: true
        };
    }
    default:{
        return state;
    }
    }
    
    
}