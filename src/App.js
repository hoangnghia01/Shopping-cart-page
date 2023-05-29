import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState, useContext } from 'react';




import { AppProvider } from './AppContext';
import Products from './components2/products/Products';
import Cart from './components2/card/Cart';

import Header1 from './components2/header1/Header1';
export default function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>

      <AppProvider>
        <Header1/>
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </AppProvider>
      
    </div>


    
  )
}
