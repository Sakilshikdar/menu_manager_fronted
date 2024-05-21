import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const checkCustomer = localStorage.getItem('customer_login');
if (checkCustomer) {
}
root.render(
  <>
    <Router>
      <UserContext.Provider value={checkCustomer}>
        <App />
      </UserContext.Provider>
    </Router>
  </>
);
reportWebVitals();