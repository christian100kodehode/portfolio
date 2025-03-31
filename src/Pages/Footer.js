import Textstyle2 from "../Styles/Textstyle2";
import githubLink from "../Images/githubLink150.jpg";
import LinkedLink from "../Images/LinkedLink.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <Textstyle2>
        <div className="FooterLinks">
          <a
            href="https://github.com/christian100kodehode/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLink} alt="GitHub Link" />
          </a>

          <a
            href="https://www.linkedin.com/in/christian-westbye-24b1bb1a2/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedLink} alt="LinkedIn Link" />
          </a>
          <p>© Christian Westbye - 2023</p>
        </div>
      </Textstyle2>
    </div>
  );
}
