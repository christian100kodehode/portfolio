import React from "react";
import "./Hero.css";
import { gsap, Timeline, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(".content", 1, { x: -400, y: 0, duration: 5, opacity: 0, ease: "ease-in", delay: 0.5 });
    tl.to(".content", 1, { x: 0, y: 0, duration: 2 });
    // tl.from(".textLine2", 1, { x: 400, y: 0, duration: 2, opacity: 0, ease: "ease-in", delay: 0.2 });
    // tl.to(".textLine2", 1, { x: 0, y: 0, duration: 2 });
  }, []);

  return (
    <div className="hero">
      <div className="content">
        <p className="textLine1">Programmerer, med IT support bakgrunn (IKT fagbrev).</p>
        <p className="textLine2">Nyutdannet med fokus på React og JS(X)!</p>
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
