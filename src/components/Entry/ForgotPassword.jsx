import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/forgot-password', { email })
            .then(response => {
                if (response.data.status) {
                    alert("Check your email and reset your password");
                    navigate('/login');
                } else {
                    alert(response.data.message);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='bg-black min-h-screen pt-10'>
            <div className="flex flex-col items-center border relative bg-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Forgot Password</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit} className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300">
                    Send Email
                </button>
                <p className="text-white mt-4">
                    Already have an account?{' '}
                    <Link to='/login'>
                        <button className="text-orange-500 font-bold hover:underline">Log In</button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
