import { useEffect, useRef, useState } from "react";

const DURATION = 1200;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * "50%" 같은 값을 화면에 들어왔을 때 0부터 세어 올립니다. (1회)
 * 숫자로 시작하지 않는 값("+계약")은 그대로 표시합니다.
 * 스크린리더에는 최종값만 읽히도록 애니메이션 숫자는 aria-hidden 처리합니다.
 */
export default function CountUp({
  value,
  onDone,
}: {
  value: string;
  onDone?: () => void;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(() =>
    target === null || prefersReducedMotion() ? target : 0
  );

  useEffect(() => {
    const el = ref.current;
    if (target === null || !el) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setCurrent(target);
      onDone?.();
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          setCurrent(Math.round(easeOutExpo(t) * target));
          if (t < 1) frame = requestAnimationFrame(tick);
          else onDone?.();
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // onDone 은 부모 렌더마다 바뀔 수 있으므로 의존성에서 제외 (1회 실행이 목적)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (target === null) return <span>{value}</span>;

  return (
    <span ref={ref} className="count-up">
      <span aria-hidden="true">
        {current}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
