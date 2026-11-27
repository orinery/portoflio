import { useState } from "react";
import "./ArchiveModal.scss";
import type { ArchivePage } from "./ProjectsData";
import { useModalBehavior } from "../../hooks/useModalBehavior";

interface Props {
  title: string;
  pages: ArchivePage[];
  archivedAt?: string;
  onClose: () => void;
}

const VIEWS = [
  { key: "pc", label: "PC" },
  { key: "mo", label: "모바일" },
] as const;

const ArchiveModal = ({ title, pages, archivedAt, onClose }: Props) => {
  const closeRef = useModalBehavior(onClose);
  const [pageIdx, setPageIdx] = useState(0);
  const [view, setView] = useState<"pc" | "mo">("pc");

  const current = pages[pageIdx];
  const images = current[view];
  const viewLabel = view === "pc" ? "PC" : "모바일";

  return (
    <div className="archive-overlay" onClick={onClose}>
      <div
        className="archive-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="archive-head">
          <div>
            <h2 id="archive-modal-title">{title}</h2>
            {archivedAt && (
              <p className="archive-caption">{archivedAt} 캡처 · 전체 화면</p>
            )}
          </div>
          <button
            ref={closeRef}
            type="button"
            className="archive-close"
            onClick={onClose}
            aria-label="전체 화면 닫기"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="archive-controls">
          {pages.length > 1 && (
            <div className="archive-group" role="group" aria-label="기획전 선택">
              {pages.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  aria-pressed={i === pageIdx}
                  onClick={() => setPageIdx(i)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}
          <div className="archive-group" role="group" aria-label="화면 크기 선택">
            {VIEWS.map((v) => (
              <button
                key={v.key}
                type="button"
                aria-pressed={v.key === view}
                onClick={() => setView(v.key)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* 조각 이미지를 이어 붙여 한 장의 긴 페이지처럼 보여줌 */}
        <div className="archive-scroll" tabIndex={0} aria-label={`${current.label} ${viewLabel} 화면`}>
          <div className={`archive-frame ${view}`} key={`${pageIdx}-${view}`}>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={
                  images.length > 1
                    ? `${current.label} ${viewLabel} 화면 (${i + 1}/${images.length})`
                    : `${current.label} ${viewLabel} 전체 화면`
                }
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveModal;
