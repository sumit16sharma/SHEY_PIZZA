import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import AddPizza from '../components/Admin/AddPizza';
import OrdersList from '../components/Admin/OrdersList';
import PizzasList from '../components/Admin/PizzasList';
import UsersList from '../components/Admin/UsersList';

const AdminScreen = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const { isAuthenticated, user, loading } = authState;

  if (!loading && (isAuthenticated === false || user.isAdmin === false)) {
    return <Redirect to='' />;
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

          <ul className='adminfunctions'>
            <li>
              <Link to='/admin/userslist'>Users List</Link>
            </li>
            <li>
              <Link to='/admin/pizzaslist'>Pizzas List</Link>
            </li>
            <li>
              <Link to='/admin/addpizza'>Add New Pizza</Link>
            </li>
            <li>
              <Link to='/admin/orderslist'>Orders List</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path='/admin' component={UsersList} />
            <Route exact path='/admin/userslist' component={UsersList} />
            <Route exact path='/admin/pizzaslist' component={PizzasList} />
            <Route exact path='/admin/addpizza' component={AddPizza} />
            <Route exact path='/admin/orderslist' component={OrdersList} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
