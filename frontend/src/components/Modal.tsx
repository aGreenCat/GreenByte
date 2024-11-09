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
                <h2 className="about-header">About GreenByte</h2>
                <p className="about-text">Hi my name is Muslim hussaini.</p>
            </div>
        </div>
    );
};

export default Modal;

