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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-green-100 p-8 rounded-md w-full max-w-4xl h-[600px] relative">
                <button
                    className="absolute top-3 right-3 text-gray-1000 hover:text-gray-700"
                    onClick={closeLeaderboardModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-3xl font-bold mb-6">empty space</h2> {/* Increased font size */}
                <div className="text-lg space-y-4">
                    <p>the leaderboard goes here</p>
                </div>
            </div>
        </div>

    );
};

export default Modal;

