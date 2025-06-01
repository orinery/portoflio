import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.scss";
import { projectsData } from "./ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);
  return (
    <section
      id="projects"
      className="projects_section"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="section-title">프로젝트</h2>
      <h3 className="section-subTitle">
        주요 프로젝트의 세부 내용을 확인해보세요.
      </h3>

      <div className="projects__cards">
        {projectsData.map((project) => (
          <div className="projectCard" key={project.name}>
            <div className="card__info">
              <h4 className="card__title">{project.name}</h4>
              <p className="card__date">
                {project.startDate} ~ {project.endDate} / {project.type}
              </p>
              <p className="card__detail">{project.description}</p>
              <p className="card__techStack">{project.techStack.join(" · ")}</p>
              <div className="link-wrapper">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-wrapper__link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ fontSize: "0.85rem" }}
                    />{" "}
                    Github
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-wrapper__link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                  </a>
                )}
                {project.NotionUrl && (
                  <a
                    href={project.NotionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-wrapper__link"
                  >
                    <FontAwesomeIcon icon={faStickyNote} /> Notion
                  </a>
                )}
              </div>
            </div>
            <div className="card__image-wrapper">
              <img
                src={project.img}
                alt={`${project.name} 대표 이미지`}
                className="card__image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
