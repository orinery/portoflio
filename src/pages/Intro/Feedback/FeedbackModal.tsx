import "./FeedbackModal.scss";
import { Feedbacks } from "./FeedbackData";
import { useModalBehavior } from "../../../hooks/useModalBehavior";

interface Props {
  onClose: () => void;
}

const FeedbackModal = ({ onClose }: Props) => {
  const closeRef = useModalBehavior(onClose);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="후기 닫기"
        >
          <span aria-hidden="true">✕</span>
        </button>
        <h2 id="feedback-modal-title">동료 피드백</h2>
        <ul className="feedback-list">
          {Feedbacks.map((item, index) => (
            <li key={index} className="feedback-item">
              <p className="feedback-content">“{item.content}”</p>
              <span className="feedback-meta">
                {item.name} <span className="feedback-role">{item.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackModal;
