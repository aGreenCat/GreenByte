import React, { useEffect, useState } from 'react';
import './LeaderboardModal.css';  // Import your CSS file here
import { extractLeaderboard } from '../functions/extractLeaderboard';

interface LeaderboardModalProps {
    showLeaderboardModal: boolean;
    closeLeaderboardModal: () => void;
}

// Move types directly inside the Modal file
export type LeaderboardItem = [string, number];

export interface LeaderboardStats {
    total: LeaderboardItem[];
    healthy: LeaderboardItem[];
    environment: LeaderboardItem[];
}

const Modal: React.FC<LeaderboardModalProps> = ({ showLeaderboardModal, closeLeaderboardModal }) => {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardStats | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch leaderboard data when the modal is shown
    useEffect(() => {
        if (showLeaderboardModal) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const data: LeaderboardStats = await extractLeaderboard(); // Fetch the leaderboard data
                    setLeaderboardData(data);  // Save the fetched data to state
                    setError(null);  // Reset any previous error
                } catch (error: any) {
                    setError(`Error fetching leaderboard data: ${error.message}`);  // Handle errors
                } finally {
                    setLoading(false);  // Set loading to false after data is fetched
                }
            };
            fetchData();
        }
    }, [showLeaderboardModal]);  // Re-fetch data when the modal is opened

    // If the modal is not shown, return null to render nothing
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
                <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
                <div className="text-lg space-y-4">
                    {loading && <p>Loading leaderboard data...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {leaderboardData && !loading && !error && (
                        <div>
                            <h3 className="text-xl font-semibold">Total</h3>
                            <ul>
                                {leaderboardData.total.map(([name, count], index) => (
                                    <li key={index}>{name}: {count}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold">Healthy</h3>
                            <ul>
                                {leaderboardData.healthy.map(([name, count], index) => (
                                    <li key={index}>{name}: {count}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold">Environmentally Friendly</h3>
                            <ul>
                                {leaderboardData.environment.map(([name, count], index) => (
                                    <li key={index}>{name}: {count}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;


