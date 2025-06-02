import { useEffect } from "react";
import "./FeedbackModal.scss";
import { Feedbacks } from "./FeedbackData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: () => void;
}

const FeedbackModal = ({ onClose }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>동료 피드백</h2>
        <ul className="feedback-list">
          {Feedbacks.map((item, index) => (
            <li key={index} className="feedback-item">
              <p className="feedback-content">“{item.content}”</p>
              <span className="feedback-meta">
                – {item.name} <span className="feedback-role">{item.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackModal;
