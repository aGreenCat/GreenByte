import { FoodDataType } from "../components/Capturer";

export const extractLeaderboard : (image: string) => Promise<FoodDataType> = async () => {
    const response = await fetch('http://localhost:5001/leaderboard', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}