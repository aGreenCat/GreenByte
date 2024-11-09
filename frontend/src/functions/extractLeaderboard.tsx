import { LeaderboardStats } from "../components/LeaderboardModal";

export const extractLeaderboard: () => Promise<LeaderboardStats> = async () => {
    const response = await fetch('http://localhost:5001/leaderboard', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch leaderboard data: ${response.statusText}`);
    }

    return await response.json() as LeaderboardStats;
}
