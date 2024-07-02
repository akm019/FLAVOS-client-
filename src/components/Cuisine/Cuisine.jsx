import React, { useState } from 'react';
import Card from './Card';
import PBM from '../../assets/PBM.jpg';
import PDP from '../../assets/PDP.jpg';
import PL from '../../assets/PL.jpg';
import MC from '../../assets/MC.jpg';
import MK from '../../assets/MK.jpg';
import MARG from '../../assets/MARG.jpg';
import MAC from '../../assets/MAC.jpg';
import WSP from '../../assets/WSP.jpg';
import RSP from '../../assets/RSP.jpg';
import CC from '../../assets/C&C.jpg';
import CKR from '../../assets/CCR.jpg';
import ChS from '../../assets/ChS.jpg';
import CS from '../../assets/CS.jpg'
import SJP from '../../assets/SJP.jpg'
import PNC from '../../assets/PNC.jpg'


import { addToCart } from '../Store/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Indian = [
  { id: 1, name: "Paneer Butter Masala", Price: 300, image: PBM },
  { id: 2, name: "Paneer Do Pyaza", Price: 300, image: PDP },
  { id: 3, name: "Paneer Lababdaar", Price: 300, image: PL },
  { id: 4, name: "Mushroom Chilly", Price: 300, image: MC },
  { id: 5, name: "Mushroom Kadhai", Price: 300, image: MK }
];

const Italian = [
  { id: 6, name: "Margherita Pizza", Price: 300, image: MARG },
  { id: 7, name: "Cheese and Corn Pizza", Price: 300, image: CC },
  { id: 8, name: "Mac and Cheese", Price: 300, image: MAC },
  { id: 9, name: "White Sauce Pasta", Price: 300, image: WSP },
  { id: 10, name: "Red Sauce Pasta", Price: 300, image: RSP }
];

const Continental = [
  { id: 11, name: "Crispy Calamari Rings", Price: 300,image:CKR },
  { id: 12, name: "Stuffed Jacket Potatoes", Price: 300,image:SJP },
  { id: 13, name: "Pancakes", Price: 300,image:PNC },
  { id: 14, name: "Chicken Sandwich", Price: 300,image:ChS },
  { id: 15, name: "Caesar Salad", Price: 300,image:CS }
];

const Chinese = [
  { id: 16, name: "Hakka Noodles", Price: 300 },
  { id: 17, name: "Veg Manchurian", Price: 300 },
  { id: 18, name: "Spring Rolls", Price: 300 },
  { id: 19, name: "Hot and Sour Soup", Price: 300 },
  { id: 20, name: "Fried Rice", Price: 300 }
];

const Cuisine = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Indian');
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const getCuisineItems = () => {
    switch (selectedCuisine) {
      case 'Indian':
        return Indian;
      case 'Italian':
        return Italian;
      case 'Continental':
        return Continental;
      case 'Chinese':
        return Chinese;
      default:
        return [];
    }
  };

  return (
    <div className="flex bg-black">
      <div className="fixed top-0  text-[20px] lg:text-4xl left-0 w-20 lg:w-60 h-screen bg-black text-white text-4xl font-thin">
        <div className="pt-20 flex flex-col ml-4 gap-8 z-20">
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Indian')}>Indian</button>
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Italian')}>Italian</button>
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Continental')}>Continental</button>
          <button className="hover:text-cyan-500" onClick={() => setSelectedCuisine('Chinese')}>Chinese</button>
        </div>
        <Link to='/cart'><button className="mt-10 ml-2  lg:ml-10 border w-20 h-10 lg:w-40 lg:h-20 hover:text-cyan-500">CART({cartItems.length})</button>
      </Link></div>
      <div className="ml-60 p-8 h-screen overflow-y-auto flex flex-wrap bg-black">
        {getCuisineItems().map(item => (
          <Card key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
