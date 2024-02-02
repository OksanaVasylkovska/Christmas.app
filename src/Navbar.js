import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo/logo.png";
import { useLayoutEffect } from "react";
import gsap from "gsap";

function Navbar() {

  useLayoutEffect(() => {
    gsap.to(".Logo-container", { rotation: 360, duration: 3 });
    gsap.to(".Home-coverText-container", {
      y: 20,
      opacity: 1,
      ease: "bounce",
      duration: 3,
      delay: 3,
    });
    gsap.to(".HomeWaiting-icon-container", {
      rotation: 360,
      duration: 3,
      delay: 4,
    });
    gsap.to(".calendar-day", {
      opacity: 1,
      ease: "power2.inOut",
      duration: 4,
    });
  }, []);

  return (
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
  );
}

export default Navbar;
