import './App.css';

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import AdventCalendar from './AdventCalendar';
import logo from './assets/logo/logo.png';
import ChristmasMovie from './ChristmasMovie';
import Footer from './Footer';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';


function App() {

  useLayoutEffect(() => {
    gsap.to(".Logo-container", { rotation: 360, duration: 3 });
    gsap.to(".Home-coverText-container", { y: 20, opacity: 1, ease: "bounce", duration: 3, delay: 1 });
    gsap.to(".HomeWaiting-icon-container", {
      rotation: 360,
      duration: 3,
      delay: 2,
    });
    gsap.to(".calendar-day", {
       opacity: 1,
       ease: "power2.inOut",
       duration: 4,
     });
  }, []);

  return (
    <Router> 
      <div className="Top-container" >
        <nav className="Navbar">
          <Link to="/" className="Link">
            <div className="Logo-container">
              <img className="Logo-icon" src={logo} alt="logo" />
            </div>
          </Link>
          <Link to="/calendar" className="Link">
            Advent calendar
          </Link>
          <Link to="/movies" className="Link">
            Christmas movies
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<AdventCalendar />} />
        <Route path="/movies" element={<ChristmasMovie /> }/>
      </Routes>

      <footer>
       <Footer />
    </footer>
    
    </Router>

  
  );
}

export default App;
