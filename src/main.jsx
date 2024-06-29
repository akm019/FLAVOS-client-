import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero/Hero2';
import Cuisine from './components/Cuisine/Cuisine';
import Cart from './components/Cart/Cart';
import Login from './components/Entry/Login';
import Signup from './components/Entry/Signup';
import ForgotPassword from './components/Entry/ForgotPassword';
import Footer from './components/Hero/Footer';
import './index.css'; // Ensure this import is present for your global styles
import UserLocation from './components/Location/UserLocation';
import RecipeList from './components/Recipes/RecipeList';
import Checkout from './components/Cart/Checkout';
import Form from './components/Entry/Form.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Hero />} />
          {/* <Route path="" element={<Hero2 />} /> */}
          <Route path="cuisine" element={<Cuisine />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="footer" element={<Footer />} />
          <Route path ="location" element={<UserLocation/>}/>
          <Route path ="RecipeList" element={<RecipeList/>}/>
          <Route path ="Checkout" element={<Checkout/>}/>
          <Route path ="Form" element={<Form/>}/>
        </Route>
      </Routes>
    </Router>
  </Provider>
);
