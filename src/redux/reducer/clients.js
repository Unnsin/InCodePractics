import {  ADD_USER, DELETE_USER, EDIT_USER, GET_USERS} from '../actions/actionTypes';

const initialState = [];

export function reducer (state=initialState,actions){
    switch(actions.type){
    case ADD_USER: {
        return [
            ...state,
            actions.user
        ];
    } 
    case DELETE_USER: {
        return [...state.filter(item => item.address.zipCode !== actions.id)];  
    }
    case EDIT_USER: {
        return state.map(item =>{ 
            if(item.address.zipCode === actions.user.address.zipCode){
                item = actions.user;
            }
            return item;
        }
        );       
    }
    case GET_USERS: {
        return [...actions.users];
    }
    default: {
        return state;
    }
    }  
}