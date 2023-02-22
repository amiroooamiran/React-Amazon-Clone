import React, {useState} from "react";

// importing components
import Header from './header/Header';
import Home from './home/Home';
import Footer from "./footer/Footer";

import Chackeout from "./chakeout/Chackeout";
// import styling
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <div>
      
      <Routes>

          {/* this section for Home Page */}
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          {/* this Section  For ChakeOut  */}
          <Route path="Checkout" element={<><Header /><Chackeout /><Footer /></>} />

          {/* this Section  for Login  Page  */}
          <Route path="login" element={<><Login /></>} />
          
      </Routes>
      
      </div>
    </Router>
  );
}

export default App;
