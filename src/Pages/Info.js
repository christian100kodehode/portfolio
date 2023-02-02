// Assets
import { headLineMain } from "../Txt/txtConst";
import krizUte from "../Images/krizUte.png";
import miscgames from "../Images/MiscGames.jpg";
import CV from "../Images/C_Westbye_CV.pdf";
import krizRund from "../Images/kriz.jpg";
import krizAmiga from "../Images/krizAmiga.jpg";
import coversHorrordelic from "../Images/coversHorrordelic.jpg";
// CSS
import "./Info.css";
// Imports
import { useState } from "react";
import { Link } from "react-scroll";

function Info() {
  // Read more section
  const [readMore, setReadMore] = useState(false);
  const [click, setClick] = useState(false);

  const linkname = readMore ? "Mindre informasjon <<" : "Mer informasjon >>";

  const extraContent = (
    <div className="moreinfoComponent">
      <img src={krizAmiga} alt="Me and my Amiga (and the Acer 286)." />
      <h4>{headLineMain.txt.about}</h4>
      <img src={miscgames} alt="Me and the digital minister of Norway. Showcasing the game Fishing Barents Sea, Xbox version." />
      <p>
        Meg, Leif Arne Nilsen fra FRP og Nikolai Astrup fra Høyre, da digital minister i Norge. Her viser jeg spillet "Fishing Barents Sea", Xbox
        versjonen, da dem var ute og besøkte spillselskaper i Norge.
      </p>
      <h4>{headLineMain.txt.about2}</h4>
      <img src={coversHorrordelic} alt="Some covers i have made over the years, just a small selection." />
      <p>
        Driver også et eget plateselskap der jeg gir ut elektronisk musikk, over 800 sanger og snart 1000 videoer på Youtube. Selskapet heter
        Horrordelic Records. Lager en mengde cover og flyere for dette prosjektet. {headLineMain.txt.about4}
      </p>
      <div>
        <Link to="info" spy={true} smooth={true} offset={-50} duration={500}>
          <a
            className="moreInfo2"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {linkname}
          </a>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <div id="info" className="info">
        <div className="infoHeader">
          <p className="infoOmmeg">Om meg</p>
        </div>
        <div className="infoComponent">
          <p>
            {headLineMain.txt.main}

            {headLineMain.txt.main2}
          </p>
          <img src={krizRund} alt="Christian Westbye" className="imgRound" />{" "}
        </div>
        <div className="moreInfoContainer">
          <a
            className="moreInfo"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {linkname}
          </a>

          {/* show extraContent when readMore is true */}
          {readMore && extraContent}
        </div>
        <div className="infoContainer">
          <img className="aboutImage" src={krizUte} alt="Me Outside.." />
          <div className="infoTextBox">
            <p>{headLineMain.txt.info1}</p>
            <p>{headLineMain.txt.info2}</p>
            <p>{headLineMain.txt.info3}</p>
            <p>{headLineMain.txt.info4}</p>
          </div>
        </div>
        <div className="cvButttonContainer">
          <a href={CV}>
            <button className="button">Last ned CV ⬇️</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
