import React from 'react'
import { Login, Register, ProductCard, ProgressBar } from 'dezenix-react'
import Home from './components/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/progress_bar'
          element={<ProgressBar bgcolor='red' progress='60' height={30} />}
        />
        <Route
          path='/product_card'
          element={
            <ProductCard
              img='https://i.ibb.co/SrRbQWb/img-1.png'
              title='Nike Jordan Air'
              price='$80'
              des='This is the best nike jordan air sneakers for basketball.'
            />
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App
