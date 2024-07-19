import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from './pages/CartList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<CartList />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App