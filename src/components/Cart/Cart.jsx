import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity } from '../Store/CartSlice';
import Lottie from 'lottie-react';
import ani from '../../assets/MyAni6.json' 
const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity({ id: itemId }));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity({ id: itemId }));
  };

  return (
    <div className='bg-black min-h-screen text-white h-full flex flex-col items-center'>
      <button
  class=" mt-10 cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
>
  CART
</button>


      {cartItems.length === 0 ? (
        <p> <Lottie animationData={ani}></Lottie>
          <h1 className='font-bold text-3xl ml-10'>YOUR CART IS <span className='text-red-500'>EMPTY</span></h1></p>
        
      ) : (
        <div className='w-[80%]'>
          {cartItems.map(item => (
            <div key={item.id} className="mb-4 p-4 border border-white flex justify-between items-center bg-gray-800 rounded-md">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className='w-20 h-20 mr-4' />
                <div>
                  <h5 className="text-xl font-semibold">{item.name}</h5>
                  <p className="text-gray-400">Price: Rs {item.Price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-red-500 text-white py-1 px-3 rounded">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-green-500 text-white py-1 px-3 rounded">+</button>
                <button onClick={() => handleRemoveFromCart(item.id)} className="bg-gray-500 text-white py-1 px-3 rounded ml-4">Remove</button>
              </div>
            </div>
          ))}
          <Link to='/Checkout' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Buy Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
