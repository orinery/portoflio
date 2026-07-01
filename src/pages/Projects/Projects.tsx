import "./Projects.scss";
import { projectsData } from "./ProjectsData";

const shortType = (type: string) => (type === "팀 프로젝트" ? "팀" : "개인");

const hostFromUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Projects = () => {
  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="projects-section section-block">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-kicker">04 / WORK</div>
            <h2>프로젝트</h2>
          </div>
          <p className="section-desc">
            직접 기획·디자인·개발한 결과물. 코드와 데모를 함께 공개합니다.
          </p>
        </div>

        {/* Featured */}
        <div className="featured-card">
          <div className="featured-info">
            <div className="featured-tags-top">
              <span className="badge-featured">FEATURED</span>
              <span className="featured-type">{featured.type}</span>
            </div>
            <h3 className="featured-title">{featured.name}</h3>
            <div className="featured-date">
              {featured.startDate} – {featured.endDate}
            </div>
            <p className="featured-desc">{featured.description}</p>
            <div className="featured-stack">
              {featured.techStack.map((t) => (
                <span className="tag-chip plain" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="featured-links">
              {featured.demoUrl && (
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark"
                >
                  Live Demo <span className="ext">↗</span>
                </a>
              )}
              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          <div className="featured-preview">
            <div className="browser">
              <div className="browser-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                {featured.demoUrl && (
                  <span className="browser-url">
                    {hostFromUrl(featured.demoUrl)}
                  </span>
                )}
              </div>
              <img src={featured.img} alt={`${featured.name} 스크린샷`} />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="project-grid">
          {rest.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-thumb">
                <img src={project.img} alt={`${project.name} 스크린샷`} />
              </div>
              <div className="project-body">
                <div className="project-head">
                  <h3>{project.name}</h3>
                  <span className="project-meta">
                    {shortType(project.type)} · {project.startDate} –{" "}
                    {project.endDate}
                  </span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.techStack.map((t) => (
                    <span className="tag-chip plain sm" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {project.demoUrl || project.githubUrl ? (
                  <div className="project-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-demo"
                      >
                        Demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-github"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                ) : (
                  <span className="project-private">
                    교사 전용 서비스 · 데모 비공개
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
