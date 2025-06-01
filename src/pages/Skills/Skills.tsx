import { useState, useEffect } from "react";
import "./Skills.scss";
import { skills } from "./SkillData";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["프론트엔드", "환경 및 배포", "디자인 및 협업"];

export default function SkillSection() {
  const [selected, setSelected] = useState("전체");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);

  return (
    <section
      id="skills"
      className="skill-section"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="section-title">기술 스택 및 도구</h2>
      <h3 className="section-subTitle">아래의 기술을 사용할 수 있습니다.</h3>

      <div className="tabs">
        <button
          className={selected === "전체" ? "active" : ""}
          onClick={() => setSelected("전체")}
        >
          전체
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selected === cat ? "active" : ""}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`skill-item ${
              selected !== "전체" && skill.category !== selected
                ? "blurred"
                : ""
            }`}
          >
            <img src={skill.icon} alt={skill.name} className="icon" />
            <span className="label">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
