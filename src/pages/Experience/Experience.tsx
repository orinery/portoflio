import { useState, useEffect } from "react";
import "./Experience.scss";
import { experienceData } from "./ExperienceData";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDetails = (index: number) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // 닫기
          : [...prev, index] // 열기
    );
  };
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);

  return (
    <section
      className="experience-section"
      data-aos="fade-up"
      data-aos-delay="200"
      id="experience"
    >
      <h2 className="section-title">경력 사항</h2>
      <h3 className="section-subTitle">
        작은 변화에서 의미를 찾고,
        <br className="mobileVisible" /> 지속적인 성장을 추구합니다.
      </h3>
      <p className="experience-title">
        <span className="line" /> 업무 경험 <span className="line" />
      </p>
      <ul className="experience-list">
        {experienceData.map((item, idx) => (
          <li className="experience-item" key={idx}>
            <div className="experience-left">
              <span className="period">{item.period}</span>
            </div>
            <div className="experience-right">
              <h4 className="title">{item.company}</h4>
              <p className="description">
                {item.title}, {item.description}
              </p>
              <div className="tech-stack">
                {item.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="toggle-link"
                onClick={() => toggleDetails(idx)}
              >
                {openIndexes.includes(idx) ? (
                  <>
                    <FontAwesomeIcon icon={faAngleUp} /> 주요 업무 내용 닫기
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faAngleDown} /> 주요 업무 내용 보기
                  </>
                )}
              </button>
              {openIndexes.includes(idx) && (
                <>
                  {/* taskGroups가 있을 경우 그룹별 렌더링 */}
                  {item.taskGroups && (
                    <>
                      <h4 className="project-title">
                        미래엔 엠티쳐 초등 교과서 개발 (2024)
                      </h4>
                      {item.taskGroups.slice(0, 3).map((group, i) => (
                        <div className="task-group" key={i}>
                          <h5>
                            {group.title} ({group.period})
                          </h5>
                          <p className="task-role">{group.role}</p>
                          <ul className="task-list">
                            {group.achievements.map((ach, j) => (
                              <li key={j}>{ach}</li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <h4 className="project-title">기타 프로젝트</h4>
                      {item.taskGroups.slice(3).map((group, i) => (
                        <div className="task-group" key={i + 3}>
                          <h5>
                            {group.title} ({group.period})
                          </h5>
                          <p className="task-role">{group.role}</p>
                          <ul className="task-list">
                            {group.achievements.map((ach, j) => (
                              <li key={j}>{ach}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </>
                  )}

                  {/* tasks만 있을 경우 (e.g. 몽키 트래블) */}
                  {item.tasks && (
                    <ul className="task-list">
                      {item.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
