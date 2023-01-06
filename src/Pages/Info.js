import Textstyle1 from "../Styles/Textstyle1";
import { headLineMain } from "../Txt/txtConst";
import krizUte from "../Images/krizUte.png";
import CV from "../Images/C_Westbye_CV.pdf";
import krizRund from "../Images/krizRund.png";
import "./Info.css";

export default function info() {
  return (
    <>
      <div id="info" className="info">
        <Textstyle1>
          <p>{headLineMain.txt.main}</p>
        </Textstyle1>{" "}
        <img src={krizRund} alt="Christian Westbye" className="imgRound" />
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
            <button className="cvButton">CV ⬇️</button>
          </a>
        </div>
      </div>
    </>
  );
}
