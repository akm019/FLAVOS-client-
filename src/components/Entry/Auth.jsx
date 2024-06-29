import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {isLogin ? <Login toggleAuth={toggleAuth} /> : <Signup toggleAuth={toggleAuth} />}
    </div>
  );
};

export default Auth;
