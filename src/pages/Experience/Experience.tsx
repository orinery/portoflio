import { useState } from "react";
import "./Experience.scss";
import { experienceData } from "./ExperienceData";

const Experience = () => {
  // 기본으로 첫 회사 첫 업무 그룹을 펼침
  const [openKeys, setOpenKeys] = useState<string[]>(["0-0"]);

  const toggle = (key: string) =>
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <section className="experience-section section-block" id="experience">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-kicker">03 / CAREER</div>
            <h2>경력</h2>
          </div>
          <p className="section-desc">
            맡은 일을 총괄하고, 반복을 제거하고, 성과로 이어지게 했습니다.
          </p>
        </div>

        {experienceData.map((item, idx) => (
          <div className="exp-row" key={idx}>
            <div className="exp-meta">
              <div className="exp-period">{item.period}</div>
              <h3 className="exp-company">{item.company}</h3>
              <div className="exp-role">{item.title}</div>
              <p className="exp-desc">{item.description}</p>
              <div className="exp-tags">
                {item.techStack.map((tech) => (
                  <span className="tag-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="exp-body">
              {item.metrics && (
                <div className="exp-metrics">
                  {item.metrics.map((m) => (
                    <div className="metric-card" key={m.label}>
                      <div className="metric-value">
                        {m.value}
                        {m.arrow && <span className="arrow">{m.arrow}</span>}
                      </div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {item.taskGroups && (
                <div className="exp-accordion">
                  {item.taskGroups.map((group, gi) => {
                    const key = `${idx}-${gi}`;
                    const open = openKeys.includes(key);
                    return (
                      <div className="acc-item" key={key}>
                        <button
                          className="acc-head"
                          onClick={() => toggle(key)}
                          aria-expanded={open}
                        >
                          <span className="acc-title">
                            <span className="acc-name">{group.title}</span>
                            <span className="acc-period">{group.period}</span>
                          </span>
                          <span className="acc-sign">{open ? "–" : "+"}</span>
                        </button>
                        {open && (
                          <div className="acc-body">
                            <div className="acc-role">{group.role}</div>
                            <ul>
                              {group.achievements.map((ach, j) => (
                                <li key={j}>{ach}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {item.tasks && (
                <ul className="exp-tasks">
                  {item.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
