import React from 'react';
import Lottie from 'lottie-react';
import dp from '../../assets/DP3.png'; // Assuming DP3.png is your image path
import img from '../../assets/PBM.jpg'; // Assuming PBM.jpg is your image path
import Card from './Card'; // Importing the Card component
import ani from '../../assets/MyAni5.json'
import { Link } from 'react-router-dom';
import Counter from './Counter';
// import {checked} from '../Navbar/Menu'
import Footer from './Footer';
import ani2 from '../../assets/MyAni8.json'



import indianImage from '../../assets/IND(FV).jpg'; // Assuming indian.jpg is your image path
import chineseImage from '../../assets/CHI(FV).jpg'; // Assuming chinese.jpg is your image path
import italianImage from '../../assets/IND(FV).jpg'; // Assuming italian.jpg is your image path
import continentalImage from '../../assets/CONTI(FV).jpg'; // Assuming continental.jpg is your image path

const Hero = () => {
  const cardData = [
    { title: 'Indian', types: ['Spicy', 'Curry', 'Traditional'], image: indianImage },
    { title: 'Chinese', types: ['Noodles', 'Dim Sum', 'Szechuan'], image: chineseImage },
    { title: 'Italian', types: ['Pasta', 'Pizza', 'Risotto'], image: italianImage },
    { title: 'Continental', types: ['Salads', 'Grills', 'Seafood'], image: continentalImage },
  ];

  return (
    <div className='bg-black min-h-screen '>
      <div className='sm:w-[40%] lg:w-[30%] float-right'>
        <img src={dp} alt="Delicious Food" className="w-full mt-10 sm:w-auto sm:h-auto lg:w-full lg:h-full animate-float" />
      </div>
      <div className='body sm:text-5xl lg:text-7xl ml-10 py-10 font-bold text-white'>
        Satisfy Your Cravings with Ease: Where <span className='text-red-500'>Taste</span> Meets <span className='text-red-500'>Convenience</span>!
      </div>
      <div className='body sm:text-xl lg:text-2xl ml-10 mt-4 text-white font-bold'>
        "Welcome to <span className='text-red-400 font-bold'>FLAVOS</span>, where delicious meets convenience. Explore a diverse menu of fresh, flavorful dishes delivered straight to your doorstep. Order now and enjoy restaurant-quality meals from the comfort of your home."
      </div>
      <button
  class=" text-xl font-bold ml-12 mt-10 relative py-4 px-12 sm:w-[40%] lg:w-[25%] rounded-md bg-white isolation-auto z-10 border-2 border-red-400 before:absolute before:w-[50%] before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#dc4d4d] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
>
 GET STARTED
</button>
      <div className='flex flex-col justify-center items-center mt-[10rem]'>
        <div className='border-b-4 border-red-400 text-white sm:text-4xl lg:text-6xl font-bold inline-block'>
          EXPLORE OUR <span className='text-red-500'>MENU</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-2xl font-light mt-10 text-white'>
        Flavos offers different cuisines and varieties of options for your cravings...
      </div>
      <div className='ml-10 w-[90%] grid lg:grid-cols-2  w-50'>
        <div className='grid grid-rows-2'>
        <Lottie className='lg:w-[60%] sm:w-[50%] sm:ml-32 mb-10' animationData={ani}></Lottie>
      <div className='text-white ml-10 font-extralight text-2xl'>
Welcome to FLAVOS, your ultimate destination for a diverse culinary experience! Our menu features a tantalizing array of cuisines including Indian, Chinese, Italian, and Continental, each crafted with fresh, high-quality ingredients. Whether you're craving spicy curries, savory noodles, delicious pastas, or gourmet salads, we have something to satisfy every palate. Our chefs bring authentic flavors right to your doorstep, ensuring a restaurant-quality meal in the comfort of your home.

Ready to explore? Click on the menu for a detailed look and place your order now!</div>
<Link to='/cuisine'><button
  class=" text-xl font-bold ml-40 relative py-4 px-12 w-[50%] rounded-md bg-white isolation-auto z-10 border-2 border-red-700 before:absolute before:w-[50%] before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
>
 EXPLORE THE MENU
</button></Link>



        </div>
      
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} types={card.types} image={card.image} />
        ))}
      </div>
      
      </div>
      <div className=' flex flex-col items-center mt-[20%] lg:ml-24 p-4'>
      <div className='border-b-4 border-red-400 text-white sm:text-4xl lg:text-6xl font-bold inline-block'>
          EXPLORE OUR <span className='text-red-500'>RECIPE SECTION</span>
        </div>
        
      <div className='flex flex-col sm:justify-center items-center lg:flex-row'>
      <div className='sm:w-[40%] lg:w-[40%]'>
        <Lottie animationData={ani2} />
      </div>
      <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
        <p className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
          Don't wanna order? We got you covered!!!
        </p>
        <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
          Welcome to our recipe section! If you're not in the mood to order, you can still find the perfect recipe for your needs right here. Explore a variety of delicious recipes and bring the taste of our kitchen to yours.
        </p>
        <Link to='/RecipeList'><button
  class=" text-xl font-bold  relative py-4 px-12 w-full rounded-md bg-white isolation-auto z-10 border-2 border-red-700 before:absolute before:w-[50%] before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
>
 RECIPES
</button></Link>
      </div>
    </div>
      </div>

     <div className='flex justify-center items-center mt-[15%]'>
     
     </div>
      
     
      <div className="min-h-screen flex items-center justify-center">
      <Counter />
    </div>
    <div>
      <Footer/>

    </div>
     
   
    </div>
  )
};

export default Hero;
