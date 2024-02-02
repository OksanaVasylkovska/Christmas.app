import "./App.css";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AdventCalendar from "./AdventCalendar";
import ChristmasMovie from "./ChristmasMovie";
import Footer from "./Footer";
import Navbar from "./Navbar";


function App() {
  

  return (
    <Router>
      <div className="Top-container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<AdventCalendar />} />
        <Route path="/movies" element={<ChristmasMovie />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

