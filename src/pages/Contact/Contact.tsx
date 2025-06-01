import { useEffect } from "react";
import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);

  return (
    <section
      className="contact-section"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="section-title">contact</h2>
      <h3 className="section-subTitle">
        감사합니다.
        <br />더 많은 정보를 원하신다면 언제든지 연락주세요.
        <br />
        새로운 기회를 기다리고 있습니다!
      </h3>
      <div className="contact-info">
        <dl>
          <div className="contact-item">
            <dt>전화번호</dt>
            <dd>
              <a href="tel:01086801330">010-8680-1330</a>
            </dd>
          </div>
          <div className="contact-item">
            <dt>이메일</dt>
            <dd>
              <a href="mailto:orinery0319@gmail.com">orinery0319@gmail.com</a>
            </dd>
          </div>
          <div className="contact-item">
            <dt>Github</dt>
            <dd>
              <a
                href="https://github.com/orinery"
                target="_blank"
                rel="noopener noreferrer"
              >
                바로 이동
              </a>
            </dd>
          </div>
          <div className="contact-item">
            <dt>Blog</dt>
            <dd>
              <a
                href="https://platypusss.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                바로 이동
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
