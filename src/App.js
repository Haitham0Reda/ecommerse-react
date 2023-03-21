import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import OurStore from './pages/OurStore';
import WishList from './pages/WishList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={ <About/> } />
            <Route path='contact' element={ <Contact/> } />
            <Route path='store' element={ <OurStore/> } />
            <Route path='blogs' element={ <Blogs/> } />
            <Route path='compare-product' element={ <CompareProduct/> } />
            <Route path='wishlist' element={ <WishList/> } />
            <Route path='login' element={ <Login/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
