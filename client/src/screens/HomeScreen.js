import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Pizza from '../components/Pizza';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzas);

  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <Fragment>
      <div className='row justify-content-center'>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something went Wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className='col-md-3 m-3' key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default HomeScreen;
