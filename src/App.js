import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import ProductDetails from './Components/Product/ProductDetails';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/login' element={<Portfolio></Portfolio>}></Route>
        <Route path='/signup' element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
