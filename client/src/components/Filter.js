import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions';

const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div className='container'>
      <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded flex-container'>
        <div className='col-md-3 w-5'>
          <input
            type='text'
            className='form-cantrol w-100'
            placeholder='Search Pizzas'
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div className='col-md-3 w-5'>
          <select
            className='form-control form-control-sm w-100 mt-2'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='veg'>Veg</option>
            <option value='nonveg'>Non-Veg</option>
          </select>
        </div>
        <div className='col-md-3 w-5'>
          <button
            className='btn w-100 mt-1'
            onClick={() => {
              dispatch(filterPizzas(searchKey, category));
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
