import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { setAlert } from '../../actions/alert';
import { getAllPizzas } from '../../actions/pizzaActions';

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzas);

  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div>
      <h2>Pizzas List</h2>

      {error && dispatch(setAlert, 'Something went wrong!')}
      <table className='table table-bordered'>
        <thead className='thead table-dark'>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <tr>Actions</tr>
          </tr>
        </thead>

        <tbody>
          {loading && <Loading />}
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <tr>
                  <td>{pizza.name}</td>
                  <td>
                    Small : {pizza.prices[0]['small']} <br />
                    Medium : {pizza.prices[0]['medium']} <br />
                    Large : {pizza.prices[0]['large']}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <i class='fas fa-trash m-1' style={{ color: 'red' }}></i>{' '}
                    <i class='fas fa-edit m-1'></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PizzasList;
