import { useEffect, useRef } from "react";

/**
 * 모달 공통 동작
 * - 열리면 닫기 버튼으로 포커스, 닫히면 열었던 요소로 포커스 복귀
 * - Esc 로 닫기
 * - 열려 있는 동안 배경 스크롤 잠금
 * 반환한 ref 를 닫기 버튼에 연결해서 사용합니다.
 */
export function useModalBehavior(onClose: () => void) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, [onClose]);

  return closeRef;
}
