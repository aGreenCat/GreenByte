import React from 'react';
import { FoodDataType } from "./Capturer.tsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(faHeart, faLeaf, farHeart);

interface FoodDataDisplayProps {
    foodData: FoodDataType;
}

const FoodDataDisplay: React.FC<FoodDataDisplayProps> = ({ foodData }) => {
    return (
        <div className="food-data-display flex flex-col items-center gap-4">  {/* Centered content */}
            <div className="flex flex-col items-center">  {/* Name on top */}
                <p className="text-4xl font-semibold text-green-800 mb-2">
    {foodData.food_name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
    }
</p>
            </div>

            <div className="flex justify-center">
                <img
                    className="photo rounded-md max-w-[400px] hover:scale-110 transition duration-300 ease-in-out"
                    src={foodData.photo}
                    alt={foodData.food_name}
                />
            </div>

            {foodData.error && (
                <p className="text-red-600 text-center mb-4">Error: {foodData.error}</p>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div className="data-box bg-green-100 p-3 rounded-md">
                    <p>Calories (Lower): {foodData.calories_lower}</p>
                    <p>Calories (Upper): {foodData.calories_upper}</p>
                </div>
                <div className="data-box bg-green-100 p-3 rounded-md">
                    <p>Carbon Emissions: {foodData.carbon_emissions} kg CO₂</p>
                    <p>Gallons per Item: {foodData.gallons_per_item_produced}</p>
                </div>
                <div className="data-box bg-green-100 p-3 rounded-md">
                    <p>Protein: {foodData.grams_of_protein}g</p>
                    <p>Carbs: {foodData.grams_of_carbs}g</p>
                    <p>Fats: {foodData.grams_of_fats}g</p>
                </div>
                <div className="data-box bg-green-100 p-2 rounded-md">
                    <p>Calories from Protein: {foodData.calories_from_protein}</p>
                    <p>Calories from Carbs: {foodData.calories_from_carbs}</p>
                    <p>Calories from Fats: {foodData.calories_from_fats}</p>
                </div>
                <div className="data-box bg-green-100 p-1 rounded-md col-span-2 text-center">
                    <p>Healthy: {foodData.healthy ? (
                        <span>Yes <i className="fa-solid fa-heart text-red-500"></i></span>
                    ) : (
                        <span>No <i className="fa-regular fa-heart text-gray-400"></i></span>
                    )}</p>
                    <p>Eco-Friendly: {foodData.environmentally_friendly ? (
                        <span>Yes <i className="fa-regular fa-leaf text-green-500"></i></span>
                    ) : (
                        <span>No <i className="fa-regular fa-leaf text-gray-400"></i></span>
                    )}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDataDisplay;