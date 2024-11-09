import React, { useEffect } from 'react';
import { LeaderboardStats } from './LeaderboardModal';
import { extractLeaderboard } from '../functions/extractLeaderboard';

const TestLeaderboard = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: LeaderboardStats = await extractLeaderboard();
                return data; // Log the data to the console
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };

        fetchData();
    }, []);

    return <div>Check the console for leaderboard data</div>;
};

export default TestLeaderboard;
