import { useState } from "react";
import "./Intro.scss";
import FeedbackModal from "./Feedback/FeedbackModal";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="intro-section" id="intro">
      <div className="intro-content">
        <h1>
          안녕하세요!
          <br />
          <span>구채현</span>입니다.
          <br />
          <span>디자인</span>하고, <span>개발</span>합니다.
        </h1>
        <p>
          웹 디자이너로 커리어를 시작해, 지금은 React·TypeScript로 직접 화면을 구현합니다.
          <br />디자인 의도를 이해하는 개발자이자, 구현 제약을 아는 디자이너로서 기획·디자인·개발 사이의 간극을 메우는 일에 강합니다.
          <br className="mobileVisible" />
          여기에 AI 도구를 더해 작업 속도와 완성도를 함께 끌어올리며, 웹 표준과 접근성을 지켜 더 많은 사용자가 막힘없이 쓰는 화면을 만듭니다.
        </p>
        <div className="intro-buttons">
          <a
            href="https://www.notion.so/Guchaehyun-1a607f340efa80d4b4d9f6f5229f72da?source=copy_link"
            target="_blank"
            className="button"
          >
            이력서 보기
          </a>
          <button onClick={() => setIsModalOpen(true)}>동료 피드백</button>
        </div>
      </div>
      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Intro;
