import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Programmerer, med IT support bakgrunn (IKT fagbrev).</p>
        <p>Nyutdannet med fokus på React og JS(X)!</p>
        <p>Familiemann med kone og to barn.</p>
        <p>Ta kontakt for en prat!</p>

        <a className="mobileButton" href="Tel:96646478" target="_blank" rel="noreferrer">
          <button className="button"> Ring meg</button>
        </a>

        <a className="desktopButton" href="mailto:krize604@gmail.com" target="_blank" rel="noreferrer">
          <button className="button"> Kontakt meg</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
