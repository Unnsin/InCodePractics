import { CLIENT_IS_LOADING, CLIENT_LOADING_ERROR, CLIENT_LOADING_SUCSSESFUL} from '../actions/actionTypes';



const initialState = {
    isLoading: false,
    isError:false
};

export function LoadingReducer (state=initialState,actions){
    switch(actions.type){
    case CLIENT_IS_LOADING:{
        return{
            ...state,
            isLoading: actions.load
        };
    }
    case CLIENT_LOADING_ERROR:{
        return{
            ...state,
            isError: actions.load
        };
    }
    case CLIENT_LOADING_SUCSSESFUL:{
        return{
            ...state,
            isLoading: actions.load,
        };
    }
    default:{
        return state;
    }
    }
    
    
}