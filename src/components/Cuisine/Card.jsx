// Card.js
import React from 'react';
import { addToCart } from '../Store/CartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({ item,handleAddToCart }) => {
  return (
    <div className="card bg-white p-4 m-4 rounded-lg shadow-md">
      {item.image && (
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
      )}
      <div className="p-2">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-gray-600">Price: ₹{item.Price}</p>
        <button  className='text-white bg-black w-28 border rounded-lg' onClick={() => handleAddToCart(item)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card;
