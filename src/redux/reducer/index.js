import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from './clients';
import { filterReducer } from './searchReducer';
import { LoadingReducer } from './LoadingReducer';

export default combineReducers({
  router: routerReducer,
  clients: reducer,
  filter: filterReducer,
  loading: LoadingReducer,
});
