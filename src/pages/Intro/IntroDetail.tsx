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
          <h3 className="card__title">모던 프론트엔드 개발</h3>
          <p className="card__text">
            React와 TypeScript 기반으로 프로젝트를 구성하고, Firebase를 활용한
            인증과 데이터 연동을 구현해보았습니다.
            <br />
            바닐라 JavaScript를 활용한 인터랙션 구현 및 간단한 게임 개발 경험도
            있습니다.
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
          <h3 className="card__title">웹 접근성을 고려한 UI/UX</h3>
          <p className="card__text">
            시각장애인용 콘텐츠와 디지털 교과서 개발 경험을 통해, 정보 구조와
            시각 흐름의 중요성을 실무에서 배웠습니다.
            <br />웹 표준과 접근성 지침을 적용한 UI 구현에 꾸준히 관심을 갖고
            있습니다.
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
          <h3 className="card__title">커뮤니케이션 및 협업</h3>
          <p className="card__text">
            GitHub, SVN, Notion 등의 협업 도구 사용 경험이 있습니다.
            <br />
            디자이너, 고객사, 외주 인력 등 다양한 직군과의 협업을 통해 유연하게
            소통하는 방식을 익혔습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroDetail;
