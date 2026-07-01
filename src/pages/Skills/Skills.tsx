import "./Skills.scss";
import { skills } from "./SkillData";

const CATEGORIES: { key: string; label: string }[] = [
  { key: "프론트엔드", label: "FRONTEND" },
  { key: "환경 및 배포", label: "ENV · DEPLOY" },
  { key: "디자인 및 협업", label: "DESIGN · COLLAB" },
  { key: "AI 활용", label: "AI TOOLING" },
];

export default function SkillSection() {
  return (
    <section id="skills" className="skill-section section-block">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-kicker">02 / STACK</div>
            <h2>기술 스택 &amp; 도구</h2>
          </div>
          <p className="section-desc">
            역할별로 묶어 정리했습니다. 화면을 설계하고, 구현하고, 배포하고,
            협업합니다.
          </p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map(({ key, label }) => {
            const items = skills.filter((s) => s.category === key);
            return (
              <div className="skill-card" key={key}>
                <div className="skill-card__head">
                  <span className="cat-label">{label}</span>
                  <span className="cat-count">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="skill-card__list">
                  {items.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <img
                        src={skill.icon}
                        alt=""
                        data-name={skill.name}
                        className="icon"
                      />
                      <span className="label">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
