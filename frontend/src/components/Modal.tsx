// src/components/Modal.tsx
import React from 'react';
import './Modal.css';  // Import your CSS file here

interface ModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>X</button>
                <h2>About Me</h2>
                <p>This is the About Me section. Add your content here.</p>
            </div>
        </div>
    );
};

export default Modal;

