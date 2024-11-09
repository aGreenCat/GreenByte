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
                <ul className="about-text">
                    <li>Upload or take a picture of food for analysis.</li>
                    <li>Get calorie content and macronutrient breakdown.</li>
                    <li>Understand the environmental impact of your food choices.</li>
                    <li>Receive an assessment of your food’s healthiness.</li>
                    <li>Promotes healthier, eco-conscious eating habits.</li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;

