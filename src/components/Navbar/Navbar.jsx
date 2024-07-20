// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../../assets/Logo.png";
import Menu from './Menu';
import { logout } from '../Store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="bg-black text-white duration-200 z-30 sm:py-4 lg:py-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center font-bold">
            <div className='hidden md:block lg:block '>
              <Link to='/' className={`flex items-center gap-2 text-2xl sm:text-3xl font-bold`}>
                <img src={Logo} alt="logo" className="w-10" />
                FLAVOS
              </Link>
            </div>
            <div className='lg:hidden ml-[90%] mt-2'>
              <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
            <div className="sm:hidden lg:block flex justify-center items-center gap-2 text-2xl">
              <ul className="hidden sm:flex gap-4">
                <li>
                  <Link to='/' className={`inline-block py-4 px-4 relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full`}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to='/cart' className={`inline-block py-4 px-4 relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full`}>
                    CART
                  </Link>
                </li>
                <li>
                  <Link to='/cuisine' className={`inline-block py-4 px-4 relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full`}>
                    MENU
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className={`inline-block py-4 px-4 relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full`}>
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link to='/location' className={`inline-block py-4 px-4 relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full`}>
                    LOCATION
                  </Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    // <div className="relative">
                    //   <span className="cursor-pointer" onMouseEnter={toggleProfileMenu}>{username}</span>
                    //   {isProfileMenuOpen && (
                    //     <ul className="absolute right-0 mt-8 bg-black text-white shadow-lg rounded-md overflow-hidden" onMouseLeave={toggleProfileMenu}>
                    //       <li>
                    //         <Link to="/profile" className="block px-4 py-2 hover:bg-gray-800">Profile</Link>
                    //       </li>
                    //       <li>
                    //         <span className="block px-4 py-2 hover:bg-gray-800 cursor-pointer" onClick={handleLogout}>Logout</span>
                    //       </li>
                    //     </ul>
                    //   )}
                    // </div>
                    <div>
                      <button className="py-2 px-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-green-400 text-white font-semibold rounded-lg transition-all duration-500 ease-in-out">
                     LOGIN
                   </button>
                    </div>
                     
                  ) : (
                    <Link to="/login" className="inline-block py-4 px-4 hover:text-blue-400">
                      <button className="py-2 px-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-green-400 text-white font-semibold rounded-lg transition-all duration-500 ease-in-out">
                        LOGIN
                      </button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}>
        <div className="bg-black text-white w-64 h-full shadow-lg p-5 fixed right-0 top-0 mt-16 flex flex-col">
          <ul className="flex flex-col gap-4 text-2xl font-bold items-center">
            <li>
              <Link to='/' className={`hover:text-blue-400`}>
                HOME
              </Link>
            </li>
            <li>
              <Link to='/cuisine' onClick={()=>{handleLogout}} className={`hover:text-blue-400`}>
                MENU
              </Link>
            </li>
            <li>
              <Link to='/cart' className={`hover:text-blue-400`}>
                CART
              </Link>
            </li>
            <li>
              <Link to='/location' className={`hover:text-blue-400`}>
                LOCATION
              </Link>
            </li>
            <li>
              <Link to='/contact' className={`hover:text-blue-400`}>
                CONTACT
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div className="relative">
                  <span className="cursor-pointer" onClick={toggleProfileMenu}>{user.username}</span>
                  {isProfileMenuOpen && (
                    <ul className="absolute right-0 mt-8 bg-black text-white shadow-lg rounded-md overflow-hidden" onMouseLeave={toggleProfileMenu}>
                      <li>
                        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-800">Profile</Link>
                      </li>
                      <li>
                        <span className="block px-4 py-2 hover:bg-gray-800 cursor-pointer" onClick={handleLogout}>Logout</span>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link to="/login" className="inline-block py-4 px-4 hover:text-blue-400">
                  <button className="py-4 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-green-400 text-white font-semibold rounded-lg transition-all duration-500 ease-in-out">
                    LOGIN
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
