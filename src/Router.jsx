import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './landing_page/home/Home';
import SignUp from './landing_page/signup/SignUp';
import Support from './landing_page/support/Support';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';

function Router() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/support' element={<Support/>}></Route>
    <Route path='/product' element={<ProductPage/>}></Route>
    <Route path='/price' element={<PricingPage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
   
  )
}

export default Router