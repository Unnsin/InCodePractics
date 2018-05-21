
import * as actionCreator from '../../redux/actions/index';
import * as actionTypes from '../../redux/actions/actionTypes';

describe('actions describe', () => {
  it('add user actions create', () => {
    const user =
        {
          general: {
            firstName: 'Liana',
            lastName: 'Crooks',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg',
          },
          job: {
            company: 'Ledner, Johnson and Predovic',
            title: 'Investor Functionality Coordinator',
          },
          contact: {
            email: 'Gerry_Hackett77@gmail.com',
            phone: '(895) 984-0132',
          },
          address: {
            street: '1520 Zemlak Cove',
            city: 'New Devon',
            zipCode: '42586-7898',
            country: 'Guinea-Bissau',
          },
        };
    const params = {
      user,
    };
    const result = actionCreator.addUser(params);
    expect(result).toBeInstanceOf(Function);
  });

  it('del user action creaters', () => {
    const id = '4234-3424';
    const result = actionCreator.deleteUser(id);
    expect(result).toBeInstanceOf(Function);
  });

  it('del user action creaters', () => {
    const user =
        {
          general: {
            firstName: 'Liana',
            lastName: 'Crooks',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg',
          },
          job: {
            company: 'Ledner, Johnson and Predovic',
            title: 'Investor Functionality Coordinator',
          },
          contact: {
            email: 'Gerry_Hackett77@gmail.com',
            phone: '(895) 984-0132',
          },
          address: {
            street: '1520 Zemlak Cove',
            city: 'New Devon',
            zipCode: '42586-7898',
            country: 'Guinea-Bissau',
          },
        };
    const result = actionCreator.editUser(user);
    expect(result).toBeInstanceOf(Function);
  });

  it('filter user action creaters', () => {
    const search = 'search';
    const res = {
      type: actionTypes.FILTER_USER,
      search,
    };
    const result = actionCreator.filterUser(search);
    expect(result).toEqual(res);
  });


  it('MessageClick user action creaters', () => {
    const res = {
      type: actionTypes.MESSAGE_CLICK,
    };
    const result = actionCreator.setMessage();
    expect(result).toEqual(res);
  });


  it('getUsers action creaters', () => {
    const users = [
      {
        general: {
          firstName: 'Liana',
          lastName: 'Crooks',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg',
        },
        job: {
          company: 'Ledner, Johnson and Predovic',
          title: 'Investor Functionality Coordinator',
        },
        contact: {
          email: 'Gerry_Hackett77@gmail.com',
          phone: '(895) 984-0132',
        },
        address: {
          street: '1520 Zemlak Cove',
          city: 'New Devon',
          zipCode: '42586-7898',
          country: 'Guinea-Bissau',
        },
      },
    ];
    const res = {
      type: actionTypes.GET_USERS,
      users,
    };
    const result = actionCreator.getUsers(users);
    expect(result).toEqual(res);
  });

  it('error load actions', () => {
    const res = {
      type: actionTypes.CLIENT_LOADING_ERROR,
      load: true,
    };
    const result = actionCreator.errorLoading();
    expect(result).toEqual(res);
  });

  it('start load actions', () => {
    const res = {
      type: actionTypes.CLIENT_IS_LOADING,
      load: true,
    };
    const result = actionCreator.startLoading();
    expect(result).toEqual(res);
  });

  it('end load actions', () => {
    const res = {
      type: actionTypes.CLIENT_LOADING_SUCSSESFUL,
      load: false,
    };
    const result = actionCreator.endLoading();
    expect(result).toEqual(res);
  });

  it('load user actions', () => {
    const result = actionCreator.loadUsers();
    expect(result).toBeInstanceOf(Function);
  });
});
