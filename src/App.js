import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Allbook from './components/AllMenu';
import { useState } from 'react';
import { CartContext } from './Context';


import MenuDetails from './components/MenuDetails';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import CustomerLogout from './components/Logout';
import UpdateProfile from './components/UpdateProfile';
import AddMenu from './components/AddMenu';
import UpdateMenu from './components/UpdateMenu';
import ShowAllMenu from './components/ShowAllMenu';
import AddReview from './components/AddReview';
import Modal from './components/Modal';
import UpdateModal from './components/UpdateModel';
import Footer from './components/Footer';
import CustomerChangePassword from './components/ChangePassword';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const checkCart = localStorage.getItem('cartData');
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (

    <CartContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allbook/:user_id' element={<Allbook />} />
        <Route path='/showAllMenu' element={<ShowAllMenu />} />
        {/* <Route path='/book/:book_slug/:book_id' element={<MenuDetails />} /> */}
        <Route path='/memu/:menu_id' element={<MenuDetails />} />
        {/* <Route path='/book/:book_id' element={<UpdateMenu />} /> */}
        <Route path='/menu/:menu_slug/:menu_id' element={<UpdateMenu />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<CustomerLogout />} />
      <Route path='/footer' element={<Footer />} />
        <Route path='/profile' element={<UpdateProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/addbook' element={<AddMenu />} />
        <Route path='/add-review/:menu_id' element={<AddReview />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/customer/ChangePassword' element={<CustomerChangePassword/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}


export default App;
