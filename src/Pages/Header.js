import { Link } from "react-scroll";
import logo from "../Images/logo.png";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="Navbar">
        <div className="Navleft">
          <Link to="hero" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="Navright">
          <Link to="info" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
            Om
          </Link>
          <Link to="Arbeid" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
            Prosjekter
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
