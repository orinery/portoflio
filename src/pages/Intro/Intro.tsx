import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-content">
        <h1>
          안녕하세요!
          <br />
          프론트엔드 개발자
          <br />
          <span>구채현</span>입니다.
        </h1>
        <p>
          React 기반의 개발 경험을 바탕으로,
          <br />더 많은 사용자가 편리하게 이용할 수 있는 웹을 만들고 싶습니다.
          <br className="mobileVisible" />
          함께 성장하고 소통할 수 있는 팀에서 일하길 기대하고 있습니다.
        </p>
        <a
          href="https://www.notion.so/Guchaehyun-1a607f340efa80d4b4d9f6f5229f72da?source=copy_link"
          target="_blank"
        >
          <button>이력서 보기</button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
