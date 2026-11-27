import "./Header.scss";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "skills", label: "기술" },
  { id: "experience", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "feedback", label: "후기" },
  { id: "contact", label: "연락처" },
];

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const currentId = visibleSections[0].target.getAttribute("id");
          if (currentId && currentId !== activeId) {
            setActiveId(currentId);
          }
        } else {
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span className="logo-name">구채현</span>
          <span className="logo-badge">PORTFOLIO</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : ""}
              onClick={() => {
                setActiveId(item.id);
                closeMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
};

export default Header;
