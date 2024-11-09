import React from 'react';

interface ModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-green-100 p-4 rounded-md relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-black bg-transparent"
                    onClick={closeModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-4">About GreenByte</h2>
                <ul className="list-disc list-inside">
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

