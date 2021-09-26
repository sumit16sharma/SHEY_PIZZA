import React, { useState } from 'react';

const AddPizza = () => {
  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const pizza = {
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

    console.log(pizza);
  };

  return (
    <div>
      <div className='text-start'>
        <h1>Add Pizza</h1>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPizza;
