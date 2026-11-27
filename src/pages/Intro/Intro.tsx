import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro-section" id="intro">
      <span id="top" className="top-anchor" />
      <div className="intro-grid">
        <div className="dot-grid" aria-hidden="true" />

        <div className="intro-content">
          <div className="kicker">
            <span className="kicker-full">FRONTEND DEVELOPER · DESIGN BACKGROUND</span>
            <span className="kicker-short">FRONTEND · DESIGN</span>
          </div>
          <h1>
            <span className="line">
              <span className="line-inner">디자인을 알고,</span>
            </span>
            <span className="line">
              <span className="line-inner accent">반복은 없앱니다.</span>
            </span>
          </h1>
          <p>
            여행 플랫폼에서 기획전을 퍼블리싱하고, 동료들이 업무에 쓰는 가격
            계산기를 만들었습니다. 개인 서비스 ‘월급의 정석’은 AI와 함께
            만들고,{" "}
            <strong>계산 결과는 테스트로 직접 확인하며 다듬었습니다.</strong>
          </p>
          <div className="intro-buttons">
            <a href="#projects" className="btn-primary">
              프로젝트 보기 <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-secondary">
              연락하기
            </a>
          </div>
        </div>

        <div className="status-card">
          <div className="status-head">
            <span className="dot" />
            STATUS — 재직 중
          </div>
          <dl>
            <div>
              <dt>NOW</dt>
              <dd>Developer · Frontend & Design</dd>
            </div>
            <div>
              <dt>PATH</dt>
              <dd>Designer → Developer</dd>
            </div>
            <div>
              <dt>WORK</dt>
              <dd>HTML · SCSS · jQuery · PHP</dd>
            </div>
            <div>
              <dt>SIDE</dt>
              <dd>Next.js · React · TS</dd>
            </div>
            <div>
              <dt>BASED</dt>
              <dd>Seoul, KR</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Intro;
