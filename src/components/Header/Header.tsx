import "./Header.scss";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "skills", label: "기술" },
  { id: "experience", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeId, setActiveId] = useState("skills");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 아래로 스크롤하면 숨김, 위로 스크롤하면 나타남
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveId("");
        }
      },
      { threshold: 0.2 }
    );

    introObserver.observe(intro);
    return () => introObserver.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // 현재 화면에 보이는 섹션들
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          // 아래쪽에 있는 섹션 우선
          .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const currentId = visibleSections[0].target.getAttribute("id");
          if (currentId && currentId !== activeId) {
            setActiveId(currentId);
          }
        } else {
          // ✅ 아무 섹션도 안 보이면 active 초기화
          setActiveId("");
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.15,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, [activeId]);

  return (
    <header className={`main-header ${hidden ? "hidden" : ""}`}>
      <div className="header-container">
        <a href="#top" className="logo">
          ㄱㅊㅎ
        </a>
        <nav className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : ""}
              onClick={() => setActiveId(item.id)} // 클릭 기반 active
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
