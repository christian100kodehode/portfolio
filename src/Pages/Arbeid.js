import Textstyle1 from "../Styles/Textstyle1";
import { projectsGithub } from "../Txt/projectConst";
import "./Arbeid.css";

export default function Launch() {
  console.log(projectsGithub);

  return (
    <div id="Arbeid" className="arbeidText">
      <Textstyle1>
        <p>Her er mine siste prosjekter:</p>
      </Textstyle1>
      <div className="container">
        {projectsGithub.map((item) => (
          <div className="projectContainer" key={item.id}>
            <div className="projectCard">
              <a href={item.pagelink} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.headline} />
              </a>
            </div>
            <div className="projectCardBottom">
              <a href={item.pagelink} target="_blank" rel="noreferrer">
                <h4>{item.tech}</h4>
              </a>
              <a href={item.sourcelink} target="_blank" rel="noreferrer">
                <p>Source: {item.headline}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
