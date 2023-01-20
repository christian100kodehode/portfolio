import Textstyle1 from "../Styles/Textstyle1";
import { headLineMain } from "../Txt/txtConst";
import krizUte from "../Images/krizUte.png";
import CV from "../Images/C_Westbye_CV.pdf";
import krizRund from "../Images/kriz.jpg";
import "./Info.css";

export default function info() {
  return (
    <div>
      <div id="info" className="info">
        <div className="infoHeader">
          <p classname="infoOmmeg">Om meg</p>
        </div>
        <div className="infoComponent">
          <p>
            {headLineMain.txt.main}

            {headLineMain.txt.main2}
          </p>
          <img src={krizRund} alt="Christian Westbye" className="imgRound" />
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
