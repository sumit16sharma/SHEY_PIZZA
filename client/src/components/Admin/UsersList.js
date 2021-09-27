import React, { useEffect } from 'react';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getallusers } from '../../actions/authActions';
import { setAlert } from '../../actions/alert';

const UsersList = () => {
  const dispatch = useDispatch();
  const getAllUsersState = useSelector((state) => state.getAllUsers);

  const { error, loading, users } = getAllUsersState;

  useEffect(() => {
    dispatch(getallusers());
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {loading && <Loading />}
      {error && dispatch(setAlert('Something went wrong!!', 'danger'))}
      <table className='table table-striped table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      class='fas fa-user-minus'
                      style={{ color: 'red' }}
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
