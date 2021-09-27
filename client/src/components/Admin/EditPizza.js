import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPizzaByID } from '../../actions/pizzaActions';

const EditPizza = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzaByID(match.params.pizzaid));
  }, []);

  return (
    <div>
      <h1>Edit Pizza</h1>
      <h1>{match.params.pizzaid}</h1>
    </div>
  );
};

export default EditPizza;
