import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Pizza from '../components/Pizza';
import { setAlert } from '../actions/alert';
import Filter from '../components/Filter';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzas);

  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <Fragment>
      <Filter />
      <div className='row justify-content-center'>
        {loading ? (
          <Loading />
        ) : error ? (
          dispatch(setAlert('Something went wrong!', 'danger'))
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
