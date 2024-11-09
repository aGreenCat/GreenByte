// components/FoodDataDisplay.tsx
import React from 'react';
import { FoodDataType } from "./Capturer.tsx";

interface FoodDataDisplayProps {
    foodData: FoodDataType;
}

const FoodDataDisplay: React.FC<FoodDataDisplayProps> = ({ foodData }) => {
    return (
        <div className="bg-green-50 p-6 rounded-lg max-w-md mx-auto shadow-md mt-6">
            <h1 className="text-2xl font-bold text-green-700 text-center mb-4">GreenBytes</h1>
            <p className="text-lg font-semibold text-green-800 text-center mb-4">
                Food: <span className="font-normal">{foodData.food_name}</span>
            </p>
            {foodData.error && (
                <p className="text-red-600 text-center mb-4">Error: {foodData.error}</p>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-md">
                    <p>Calories (Lower): {foodData.calories_lower}</p>
                    <p>Calories (Upper): {foodData.calories_upper}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-md">
                    <p>Carbon Emissions: {foodData.carbon_emissions} kg CO₂</p>
                    <p>Gallons per Item: {foodData.gallons_per_item_produced}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-md">
                    <p>Protein: {foodData.grams_of_protein}g</p>
                    <p>Carbs: {foodData.grams_of_carbs}g</p>
                    <p>Fats: {foodData.grams_of_fats}g</p>
                </div>
                <div className="bg-green-100 p-4 rounded-md">
                    <p>Calories from Protein: {foodData.calories_from_protein}</p>
                    <p>Calories from Carbs: {foodData.calories_from_carbs}</p>
                    <p>Calories from Fats: {foodData.calories_from_fats}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-md col-span-2 text-center">
                    <p>Healthy: {foodData.healthy ? "Yes" : "No"}</p>
                    <p>Eco-Friendly: {foodData.environmentally_friendly ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDataDisplay;
