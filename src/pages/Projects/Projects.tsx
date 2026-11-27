import { useState } from "react";
import type { CSSProperties } from "react";
import "./Projects.scss";
import { learningLogs, projectsData } from "./ProjectsData";
import type { Project } from "./ProjectsData";
import ArchiveModal from "./ArchiveModal";

const shortType = (type: string) => type.replace(" 프로젝트", "");

const hostFromUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Projects = () => {
  const [featured, ...rest] = projectsData;
  const [archiveOf, setArchiveOf] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section section-block">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">04 / WORK</div>
            <h2>프로젝트</h2>
          </div>
          <p className="section-desc">
            개인 서비스와 실무 프로젝트. 공개 가능한 코드와 데모를 함께 둡니다.
          </p>
        </div>

        {/* Featured */}
        <div className="featured-card" data-reveal>
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
                  Live Demo{" "}
                  <span className="ext" aria-hidden="true">
                    ↗
                  </span>
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
          <div
            className={`featured-preview${featured.mobileImg ? " has-phone" : ""}`}
          >
            <div className="browser">
              <div className="browser-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                {(featured.previewUrl || featured.demoUrl) && (
                  <span className="browser-url">
                    {featured.previewUrl ?? hostFromUrl(featured.demoUrl!)}
                  </span>
                )}
              </div>
              <img
                src={featured.img}
                alt={featured.imgAlt ?? `${featured.name} 스크린샷`}
              />
            </div>
            {featured.mobileImg && (
              <div className="featured-phone">
                <img
                  src={featured.mobileImg}
                  alt={`${featured.name} 모바일 화면`}
                />
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="project-grid">
          {rest.map((project, i) => (
            <div
              className={`project-card${project.wide ? " wide" : ""}`}
              key={project.name}
              data-reveal
              style={{ "--i": i % 2 } as CSSProperties}
            >
              <div className="project-thumb">
                <img
                  src={project.img}
                  alt={project.imgAlt ?? `${project.name} 스크린샷`}
                  loading="lazy"
                />
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
                {project.credit && (
                  <p className="project-credit">{project.credit}</p>
                )}
                <div className="project-stack">
                  {project.techStack.map((t) => (
                    <span className="tag-chip plain sm" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {(project.demoUrl ||
                  project.githubUrl ||
                  project.archive ||
                  (project.liveLinks && project.isLive !== false)) && (
                  <div className="project-links">
                    {project.archive && (
                      <button
                        type="button"
                        className="link-archive"
                        onClick={() => setArchiveOf(project)}
                      >
                        전체 화면 보기
                      </button>
                    )}
                    {project.isLive !== false &&
                      project.liveLinks?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link-demo"
                      >
                        {link.label}{" "}
                        <span className="ext" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ))}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-demo"
                      >
                        Demo{" "}
                        <span className="ext" aria-hidden="true">
                          ↗
                        </span>
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
                )}
                {project.note && (
                  <span className="project-private">{project.note}</span>
                )}
                {project.archive && project.archivedAt && (
                  <span className="project-private">
                    {project.isLive === false
                      ? `${project.archivedAt} 캡처 · 프로모션 종료`
                      : `라이브 페이지 · ${project.archivedAt} 전체 화면 캡처 보관`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {archiveOf?.archive && (
          <ArchiveModal
            title={archiveOf.name}
            pages={archiveOf.archive}
            archivedAt={archiveOf.archivedAt}
            onClose={() => setArchiveOf(null)}
          />
        )}

        {/* 학습 기록: 카드 없이 한 줄씩 */}
        <div className="project-archive" data-reveal>
          <span className="archive-label">학습 기록</span>
          <ul>
            {learningLogs.map((log) => (
              <li key={log.name}>
                <a href={log.githubUrl} target="_blank" rel="noreferrer">
                  {log.name}
                </a>
                <span className="archive-summary">{log.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
