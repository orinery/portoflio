import type { CSSProperties } from "react";
import "./IntroDetail.scss";

const COMPETENCIES = [
  {
    no: "01",
    title: (
      <>
        디자인을 아는
        <br />
        UI 구현
      </>
    ),
    text: "웹디자이너로 일한 경험 덕분에 시안의 간격과 위계, 인터랙션까지 그대로 화면에 옮깁니다. 디자인이 필요한 일은 직접 맡아 처리합니다.",
  },
  {
    no: "02",
    title: (
      <>
        반복 업무를
        <br />
        도구로
      </>
    ),
    text: "동료들이 계산기로 하나하나 두드리던 상품 가격 계산을 사내 도구로 바꿨습니다. 디지털 교과서 PL 시절에는 작업 가이드와 프로세스를 정비해, 새벽 퇴근이 일상이던 팀이 대부분 정시에 퇴근하게 됐습니다.",
  },
  {
    no: "03",
    title: (
      <>
        검증하며 쓰는
        <br />
        AI
      </>
    ),
    text: "AI 코딩 도구로 빠르게 만들되, 결과는 직접 확인합니다. 개인 서비스 ‘월급의 정석’은 계산 로직을 화면과 분리하고 단위 테스트를 붙여, 계산이 맞는지 확인하며 다듬었습니다.",
  },
];

const IntroDetail = () => {
  return (
    <section className="core-section">
      <div className="section-inner">
        <div className="section-head" data-reveal>
          <div>
            <div className="section-kicker">01 / CORE</div>
            <h2>핵심 역량</h2>
          </div>
          <p className="section-desc">
            디자인에서 개발까지, 이렇게 일합니다.
          </p>
        </div>

        <div className="core-cards">
          {COMPETENCIES.map((c, i) => (
            <div
              className="core-card"
              key={c.no}
              data-reveal
              style={{ "--i": i } as CSSProperties}
            >
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
