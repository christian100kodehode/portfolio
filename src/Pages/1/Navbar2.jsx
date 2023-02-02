import Logo from "../assets/LynlakkLogoHeader.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, Scroll } from "react-scroll";
import FbIcon from "./images/FbIcon.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [currentDate, setCurrentDate] = useState("");

  const dateToday = () => {
    let hours = new Date().getHours();
    console.log(hours);
    return hours;
  };

  const dayToday = () => {
    let day = new Date().getDay();
    console.log(day);
    return day;
  };

  // useEffect(() => {
  //   let date = new Date().getDate(); //Current Date
  //   let month = new Date().getMonth() + 1; //Current Month
  //   let year = new Date().getFullYear(); //Current Year
  //   let hours = new Date().getHours(); //Current Hours
  //   let min = new Date().getMinutes(); //Current Minutes
  //   let sec = new Date().getSeconds(); //Current Seconds
  //   setCurrentDate(date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec);
  // }, []);

  return (
    <div className="header">
      <div className="Top">
        {/* <p className="RingText"> Ring</p> */}
        <p>
          {" "}
          Tlf:{" "}
          <a className="phone" href="Tel:95223314">
            95 22 33 14.{" "}
          </a>
          {/* Check if it is open (09-17) and not a saturday/sunday 
            (dayToday show from 0 - 6),  Sunday and Saturday are 0 and 6, so doing a modulo operator (%)
            to see if something more than 0 remains ( 6 % 6 = 0  and 0 % 6 = 0) */}
          Man - Fre: 09.00 - 17.00.{" "}
          {dateToday() >= 9 && dateToday() < 17 && dayToday() % 6 !== 0 ? (
            <>
              {" "}
              <a className="openText">Åpent </a>
              <a className="openLight">🟢</a>
            </>
          ) : (
            <>
              <a className="closedText">Stengt</a>
              <a className="closeLight"> 🔴</a>
            </>
          )}
        </p>
      </div>
      <div className="HeaderContainer">
        <nav className="navbar">
          <Link to="app" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
            <img src={Logo} alt="Lynlakk Logo" className="Logo" />
          </Link>

          {/* Hamburger Menu icon changing on click */}
          <div className="hamburger-menu" onClick={handleClick}>
            {click ? <FaTimes size={30} style={{ color: "#ffffff" }} /> : <FaBars size={30} style={{ color: "#ffffff" }} />}
          </div>
          {/* Hamburger Menu show contents or not */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="about" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
                Tjenester
              </Link>
            </li>
            <li className="nav-item">
              <Link to="video" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
                Om
              </Link>
            </li>
            <li className="nav-item">
              <Link to="omoss" onClick={closeMenu} spy={true} smooth={true} offset={-70} duration={500}>
                Besøk
              </Link>
            </li>
          </ul>
        </nav>
        <a href="https://facebook.com/Lynlakk" target="_blank" rel="noreferrer">
          <img src={FbIcon} alt="Facebook Link Lynlakk" className="FbIcon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
