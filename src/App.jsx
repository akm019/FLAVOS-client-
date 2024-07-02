import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Hero2 from './components/Hero/Hero2.jsx'
import { Outlet } from 'react-router-dom';
import Cuisine from './components/Cuisine/Cuisine.jsx'
import Footer from './components/Hero/Footer.jsx';
import ProfileForm from './components/Entry/ProfileForm.jsx';


const App = ()=> {
  return (
    <div >
     <Navbar/>
     <div className=''>
     <Outlet/>
     </div>
    {/* <ProfileForm/> */}
   
    </div>
  )
}

export default App