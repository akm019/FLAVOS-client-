import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Signup = ({ toggleAuth }) => {
  
const[userName,setuserName] = useState('')
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')

const handleSubmit = (e) =>{
  e.preventDefault()
  axios.post('http://localhost:3000/auth/signup',
  {
    userName,
    email,
    password}).then(response=>{
      console.log(response)
    }).catch(err =>
    console.log(err))
}

  return (
    <div className='bg-black min-h-screen pt-10'>
        <div className="flex flex-col items-center border  relative bg-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
      onChange={(e)=>setuserName(e.target.value)}/>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        onChange={(e)=>setEmail(e.target.value)}/>
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit} className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300">
        Sign Up
      </button>
      <p className="text-white mt-4">
        Already have an account?{' '}
        <Link to ='/Login'>
        <button
          className="text-orange-500 font-bold hover:underline"
          onClick={toggleAuth}
        >
          Log In
        </button>
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Signup;
