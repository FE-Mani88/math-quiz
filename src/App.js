import React, { useState } from 'react';
import './App.css'
import './input.css';
import { Routes, Route } from 'react-router-dom'
/////////////////Components//////////////////
// import {Welcome, Home, Contact, Shop, Info, Error404} from './components';
import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import Info from './components/Info/Info';
import Error404 from './components/Error404/Error404';
import Wquiz from './components/Wquiz/Wquiz';
import Bquiz from './components/Bquiz/Bquiz';
import Select from './components/Select/Select';
// import Quiz from './components/Quiz/Quiz';
///////////////////////////////////

function App() {

  const [loaded, setLoaded] = useState(false)

  window.onload = () => {
    setLoaded(true)
  }

  return (
    <>
      {loaded ? (<Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='*' element={<Error404 />}></Route>
        <Route path='/wquiz' element={<Wquiz/>}></Route>
        <Route path='/bquiz' element={<Bquiz/>}></Route>
        <Route path='/Select' element={<Select/>}></Route>
      </Routes>) : (
        <div className='flex items-center justify-center h-[100vh]'>
          <img className='transition-all' src="./images/NewSpin.gif" alt="#" />
        </div>
      )}
    </>
  );
}

export default App;
