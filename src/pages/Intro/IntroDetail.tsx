import { useEffect } from "react";
import "./IntroDetail.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);

  return (
    <section className="intro-detail" data-aos="fade-up" data-aos-delay="200">
      <h2 className="section-title">핵심 역량</h2>
      <h3 className="section-subTitle">
        더 많은 사용자가 불편 없이 <br className="mobileVisible" /> 이용할 수
        있는 웹을 고민합니다.
      </h3>

      <div className="intro-detail__cards">
        <div className="card">
          <div className="card__image-wrapper">
            <img
              src="/assets/frontend.png"
              alt="프론트엔드 이미지"
              className="card__image"
            />
          </div>
          <h3 className="card__title">디자인을 이해하는 프론트엔드 개발</h3>
          <p className="card__text">
            React·TypeScript·Next.js로 서비스를 구성하고, Firebase 인증·데이터 연동, 공공 API 연동까지 직접 구현합니다.
            <br />
            Photoshop·Illustrator·Figma를 다뤄온 디자인 경험 덕분에, 디자인 시안을 픽셀 단위로 충실히 옮기면서도 구현 가능성을 함께 판단합니다.
          </p>
        </div>
        <div className="card">
          <div className="card__image-wrapper">
            <img
              src="/assets/accessibility.png"
              alt="접근성 이미지"
              className="card__image"
            />
          </div>
          <h3 className="card__title">웹 표준·접근성 기반 UI 구현</h3>
          <p className="card__text">
          시각장애인용 교과서 리더기와 디지털 교과서를 개발하며, 정보 구조와 시각 흐름을 실제 사용자 제약 속에서 설계했습니다. 시맨틱 마크업과 웹 접근성 지침(WCAG)을 적용해, 모든 사용자가 동등하게 접근하는 화면을 만듭니다.
          </p>
        </div>

        <div className="card">
          <div className="card__image-wrapper">
            <img
              src="/assets/collaboration.png"
              alt="협업도구 이미지"
              className="card__image"
            />
          </div>
          <h3 className="card__title">직군을 넘나드는 협업</h3>
          <p className="card__text">
            디자이너·고객사·외주 인력과 협업하며
            <br/>
            Slack, GitHub, SVN, Notion으로 일정과 산출물을 관리했습니다.
            <br />
            외주 온보딩 가이드를 직접 만들고 반복 작업을 제거하는 프로세스를 제안해, 팀의 야근을 절반으로 줄였습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroDetail;
