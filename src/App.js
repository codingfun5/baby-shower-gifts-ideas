import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom"

import './App.css';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Clothes from './Clothes';
import Contact from './Contact';

function App() {
 
  return <Router>
    <nav>
    <Link to="/" className='link'>HOME</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/shop" className='link'>SHOP</Link>
      <Link to="/clothes" className='link'>Clothes</Link>
      <Link to="/contact" className='link'>CONTACT US</Link>
    </nav>
    <Routes>
    <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/shop" element={<Shop />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    
  </Router>
 
 
  
  }

export default App;