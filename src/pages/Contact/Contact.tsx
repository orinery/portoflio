import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section section-block" id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="contact-lead">
            <div className="section-kicker">05 / CONTACT</div>
            <h2>
              함께 만들
              <br />
              기회를 기다립니다.
            </h2>
            <p>
              프로젝트, 채용, 협업 무엇이든 편하게 연락 주세요.
              <br />
              보통 하루 안에 답장드립니다.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:orinery0319@gmail.com">
              <span className="c-label">EMAIL</span>
              <span className="c-value">orinery0319@gmail.com</span>
            </a>
            <a href="tel:01086801330">
              <span className="c-label">PHONE</span>
              <span className="c-value">010-8680-1330</span>
            </a>
            <a
              href="https://github.com/orinery"
              target="_blank"
              rel="noreferrer"
              className="last"
            >
              <span className="c-label">GITHUB</span>
              <span className="c-value">github.com/orinery ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
