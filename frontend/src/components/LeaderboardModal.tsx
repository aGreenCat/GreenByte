// src/components/Modal.tsx
import React from 'react';
import './LeaderboardModal.css';  // Import your CSS file here

interface LeaderboardModalProps {
    showLeaderboardModal: boolean;
    closeLeaderboardModal: () => void;
}

const Modal: React.FC<LeaderboardModalProps> = ({ showLeaderboardModal, closeLeaderboardModal }) => {
    if (!showLeaderboardModal) return null;

    return (
        <div className="Lmodal-overlay">
            <div className="Lmodal-content">
                <button className="Lclose-btn" onClick={closeLeaderboardModal}>X</button>
                <h2 className="Labout-header">About GreenByte</h2>
                <ul className="Labout-text">
                    <li>imsmelly</li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;

