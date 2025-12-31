import React, { useEffect, useState } from 'react'
import Navbar from './components/header/Navbar'

import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom'
import {  } from 'lucide-react'
import PrdouctListing from './pages/productList/PrdouctListing'
import ProductDetail from './pages/productDetail.jsx/ProductDetail'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import CategoryBar from './components/header/CategoryBar'
import Signup from './pages/login/Signup'
import Orders from './pages/orders/Orders'
import OrderPlaced from './pages/orders/OrderPlaced'

const App = () => {

  const navigate = useNavigate();


    useEffect(()=>{
      navigate("/")
    },[])
  

  return (
    <div className='min-h-screen flex flex-col '>
      <Navbar/>     
      <CategoryBar/>

      <main className='flex-1'>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='products' element={<PrdouctListing/>} />
            <Route path='product' element={<ProductDetail/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='checkout' element={<Checkout/>} />
            <Route path='login' element={<Login/>} />
            <Route path='sign-up' element ={<Signup/>}/>
            <Route path='profile' element={<Profile/>} />
            <Route path='orders' element={<Orders/>}/>
            <Route path='orderPlaced' element={<OrderPlaced/>}/>
          </Routes>
      </main>
          
      <Footer/>
    </div>

  )
}

export default App
