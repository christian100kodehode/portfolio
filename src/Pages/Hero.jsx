import React from "react";
import "./Hero.css";
import { useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import Sinewave from "../Images/Sinewave";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <Sinewave />
        <div className="textContent">
          <p className="textLine2">Nyutdannet med fokus på React og JS(X)!</p>
          <p className="textLine1">
            Programmerer, med IT support bakgrunn (IKT fagbrev).
          </p>

          <p>Familiemann med kone og to barn.</p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-250px",
            width: "5rem",
          }}
          animate={{
            x: "50%",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 0.4,
          }}
        >
          <a
            className="mobileButton"
            href="Tel:96646478"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button"> Ring meg</button>
          </a>

          <a
            className="desktopButton"
            href="mailto:krize604@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button"> Kontakt meg</button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
