import React from 'react'
import { Login, Register, ProductCard } from 'dezenix-react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product_card" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
