import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from './clients';
import { filterReducer } from './searchReducer';

export default combineReducers({
  router: routerReducer,
  clients: reducer,
  filter: filterReducer,
});
