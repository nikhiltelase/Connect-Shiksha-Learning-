import React from 'react'
import Home from './pages/Home';
import UsreList from './pages/List'
import FormValadation from './pages/FormValadation'
import FormHandling from './pages/FormHandling';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/list' element={<UsreList />} />
        <Route path='/form-validation' element={<FormValadation />} />
        <Route path='/form-handling' element={<FormHandling />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App