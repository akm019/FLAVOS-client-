import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/authSlice'; // Assuming this is where setUser action is defined

const Login = ({ toggleAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:3000/auth/login", {
            email,
            password,
        })
        .then(response => {
            if (response.data.status) {
                const user = response.data.user;
                dispatch(setUser(user)); // Store user data in Redux
                navigate('/'); // Redirect on successful login
                alert("User logged in successfully!");
            } else {
                alert(response.data.message);
                console.log("Login failed");
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        });
    };

    return (
        <div className='bg-black min-h-screen pt-10'>
            <div className="border flex flex-col items-center bg-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Login
                </button>
                <Link to='/forgot-password'>
                    <button
                        className="mt-10 text-orange-500 underline font-bold"
                        onClick={toggleAuth}
                    >
                        Forgot Password
                    </button>
                </Link>
                <p className="text-white mt-4">
                    Don't have an account?{' '}
                    <Link to='/signup'>
                        <button
                            className="text-orange-500 font-bold hover:underline"
                            onClick={toggleAuth}
                        >
                            Sign Up
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
