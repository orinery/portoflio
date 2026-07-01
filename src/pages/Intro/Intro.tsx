import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro-section" id="intro">
      <span id="top" className="top-anchor" />
      <div className="intro-grid">
        <div className="dot-grid" aria-hidden="true" />

        <div className="intro-content">
          <div className="kicker">FRONTEND DEVELOPER · DESIGN BACKGROUND</div>
          <h1>
            디자인하고,
            <br />
            <span className="accent">개발합니다.</span>
          </h1>
          <p>
            웹 디자이너로 시작해 지금은 React·Next.js로 화면을 구현합니다. AI
            도구를 적극 활용해 빠르게 만들고, 코드를 이해하고 다듬는 데
            집중합니다. 디자인 의도와 구현 제약을 모두 아는 개발자로서,{" "}<br/>
            <strong>기획–디자인–개발 사이의 간극을 메웁니다.</strong>
          </p>
          <div className="intro-buttons">
            <a href="#projects" className="btn-primary">
              프로젝트 보기 <span className="arrow">→</span>
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
              <dt>ROLE</dt>
              <dd>Frontend Developer</dd>
            </div>
            <div>
              <dt>STACK</dt>
              <dd>React · TypeScript · Next.js</dd>
            </div>
            <div>
              <dt>PATH</dt>
              <dd>Designer → Developer</dd>
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
