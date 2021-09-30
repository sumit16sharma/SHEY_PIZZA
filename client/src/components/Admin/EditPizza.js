import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaByID } from '../../actions/pizzaActions';
import Loading from '../Loading';
import { setAlert } from '../../actions/alert';
import { editPizza } from '../../actions/pizzaActions';

const EditPizza = ({ match }) => {
  const dispatch = useDispatch();
  const getPizzaByIDState = useSelector((state) => state.getPizzaByID);
  const editPizzaState = useSelector((state) => state.editPizza);

  const { loading, error, pizza } = getPizzaByIDState;
  const { edit_loading, edit_success, edit_error } = editPizzaState;

  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (pizza && pizza._id === match.params.pizzaid) {
      setName(pizza.name);
      setSmallPrice(pizza.prices[0]['small']);
      setMediumPrice(pizza.prices[0]['medium']);
      setLargePrice(pizza.prices[0]['large']);
      setImage(pizza.image);
      setCategory(pizza.category);
      setDescription(pizza.description);
    } else {
      dispatch(getPizzaByID(match.params.pizzaid));
    }
  }, [pizza, dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const editedpizza = {
      _id: match.params.pizzaid,
      name,
      prices: {
        small: Number(smallPrice),
        medium: Number(mediumPrice),
        large: Number(largePrice),
      },
      image,
      description,
      category,
    };

    dispatch(editPizza(editedpizza));
  };

  return (
    <div>
      <div className='text-start shadow-lg p-3 mb-5 bg-white rounded'>
        {loading && <Loading />}
        {error && dispatch(setAlert('Something went wrong!!', 'danger'))}
        {edit_success &&
          dispatch(setAlert('Pizza Details Edited Successfully!!', 'success'))}
        {edit_loading && <Loading />}
        {edit_error && dispatch(setAlert('Something went wrong!', 'danger'))}
        <h1>Edit Pizza</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Small Variant Price'
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Medium Variant Price'
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Large Variant Price'
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Image URL'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Description..'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type='submit' class='btn btn-primary mt-3'>
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPizza;
