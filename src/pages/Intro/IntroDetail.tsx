import "./IntroDetail.scss";

const COMPETENCIES = [
  {
    no: "01",
    title: (
      <>
        디자인을 이해하는
        <br />
        프론트엔드 개발
      </>
    ),
    text: "React·TypeScript·Next.js로 서비스를 구성하고 Firebase·공공 API 연동까지 직접 구현합니다. Photoshop·Illustrator·Figma 경험 덕에 시안을 픽셀 단위로 옮기면서 구현 가능성을 함께 판단합니다. 직접 구현할 수 있기에 AI 도구도 검증하며 활용해 반복 작업을 줄이고 구현 속도와 품질을 함께 끌어올립니다.",
  },
  {
    no: "02",
    title: (
      <>
        웹 표준·접근성
        <br />
        기반 UI 구현
      </>
    ),
    text: "시각장애인용 교과서 리더기와 디지털 교과서를 개발하며 정보 구조를 실제 사용자 제약 속에서 설계했습니다. 시맨틱 마크업과 WCAG를 적용해 모두가 동등하게 접근하는 화면을 만듭니다.",
  },
  {
    no: "03",
    title: (
      <>
        직군을 넘나드는
        <br />
        협업
      </>
    ),
    text: "디자이너·고객사·외주 인력과 협업하며 Slack·GitHub·SVN·Notion으로 일정과 산출물을 관리했습니다. 온보딩 가이드를 직접 만들고 반복 작업을 제거하는 프로세스를 제안해 팀의 야근을 절반으로 줄였습니다.",
  },
];

const IntroDetail = () => {
  return (
    <section className="core-section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-kicker">01 / CORE</div>
            <h2>핵심 역량</h2>
          </div>
          <p className="section-desc">
            더 많은 사용자가 불편 없이 이용할 수 있는 웹을 고민합니다.
          </p>
        </div>

        <div className="core-cards">
          {COMPETENCIES.map((c) => (
            <div className="core-card" key={c.no}>
              <div className="core-no">{c.no}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroDetail;
