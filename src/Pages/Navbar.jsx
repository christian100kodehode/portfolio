import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="navbar">
        <ul>
          <li className="nav-header">
            <Link to="hero" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
              Christian Westbye
              <li className="navTitle">FrontEnd Developer</li>
            </Link>
          </li>
        </ul>
        {/* Hamburger Menu icon changing on click */}
        <div className="hamburger-menu" onClick={handleClick}>
          {click ? <FaTimes size={30} style={{ color: "#ffffff" }} /> : <FaBars size={30} style={{ color: "#ffffff" }} />}
        </div>
        {/* Hamburger Menu show contents or not */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="info" onClick={closeMenu} spy={true} smooth={true} offset={-50} duration={500}>
              Om
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Arbeid" onClick={closeMenu} spy={true} smooth={true} offset={-10} duration={500}>
              Prosjekter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
