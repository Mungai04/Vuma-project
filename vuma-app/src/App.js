import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import FAQ from './components/FAQ';
import CustomerService from './components/CustomerService';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth">Auth</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/customer-service">Customer Service</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/customer-service" element={<CustomerService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;