import { createSelector } from 'reselect';

const getSearchFilter = state => state.filter.SearchFilter;
const getUser = state => state.clients;

export const GetSearchFilter = createSelector(
  [getSearchFilter, getUser],
  (SearchFilter, Users) => [...Users.filter(item => item.general.firstName.toLowerCase().indexOf(SearchFilter.toLowerCase()) > -1)],
);
