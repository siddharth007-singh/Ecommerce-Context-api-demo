import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

function App() {


  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route  exact path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

//This Page is having one diffect that Will be correct after some time;
