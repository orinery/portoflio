import { useState } from "react";
import type { CSSProperties } from "react";
import "./Feedback.scss";
import { Feedbacks } from "../Intro/Feedback/FeedbackData";
import FeedbackModal from "../Intro/Feedback/FeedbackModal";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const highlights = Feedbacks.filter((f) => f.highlight);

  return (
    <section className="feedback-section section-block" id="feedback">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">05 / VOICES</div>
            <h2>함께 일한 사람들</h2>
          </div>
          <p className="section-desc">
            디자이너·기획자·개발자 동료와 팀 프로젝트 멤버가 남긴 이야기입니다.
          </p>
        </div>

        <ul className="feedback-cards">
          {highlights.map((f, i) => (
            <li
              className="feedback-card"
              key={`${f.name}-${f.role}`}
              data-reveal
              style={{ "--i": i } as CSSProperties}
            >
              <blockquote>
                <p>“{f.highlight}”</p>
              </blockquote>
              <div className="feedback-by">
                <span className="by-name">{f.name}</span>
                <span className="by-role">{f.role}</span>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="feedback-more"
          onClick={() => setOpen(true)}
          data-reveal
        >
          후기 전체 보기 ({Feedbacks.length})
        </button>
      </div>

      {open && <FeedbackModal onClose={() => setOpen(false)} />}
    </section>
  );
};

export default Feedback;
