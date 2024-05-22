import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Allbook from './components/Allbook';
import { useState } from 'react';
import { CartContext } from './Context';


import BookDetails from './components/BookDetails';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import CustomerLogout from './components/Logout';
import UpdateProfile from './components/UpdateProfile';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import ShowAllBook from './components/ShowAllBook';
import AddReview from './components/AddReview';
import Modal from './components/Modal';


function App() {
  const checkCart = localStorage.getItem('cartData');
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
  
    <CartContext.Provider value={{ cartData, setCartData }}>
   <Header />
   <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allbook/:user_id' element={<Allbook />} />
          <Route path='/showAllBook' element={<ShowAllBook />} />
          {/* <Route path='/book/:book_slug/:book_id' element={<BookDetails />} /> */}
          <Route path='/book/:book_id' element={<BookDetails />} />
          {/* <Route path='/book/:book_id' element={<UpdateBook />} /> */}
          <Route path='/book/:book_slug/:book_id' element={<UpdateBook />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<CustomerLogout />} />
          <Route path='/profile' element={<UpdateProfile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/add-review/:book_id' element={<AddReview />} />
          <Route path='/modal' element={<Modal />} />
          {/* <Route path='/book/:book_slug/:book_id' element={<BookDetails />} /> */}
    </Routes>
    </CartContext.Provider>
  );
}


export default App;
