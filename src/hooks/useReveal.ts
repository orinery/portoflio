import { useEffect } from "react";

/**
 * 페이지의 모든 [data-reveal] 요소를 관찰하다가 화면에 들어오면
 * data-revealed 속성을 붙입니다. (한 번만, 다시 숨기지 않음)
 *
 * 클래스가 아닌 별도 data 속성을 쓰는 이유: React 가 className 을 다시 쓰더라도
 * 노출 상태가 지워지지 않게 하기 위함.
 * 실제 모션과 reduced-motion 처리는 CSS(index.scss)가 담당합니다.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed])"
    );

    const reveal = (el: Element) => el.setAttribute("data-revealed", "");

    if (!("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
