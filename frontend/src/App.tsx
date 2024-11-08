import { useState } from 'react';
import './App.css'
import Capturer from "./components/Capturer.tsx";
import { FoodDataType } from "./components/Capturer.tsx";
import FoodDataDisplay from './components/FoodDataDisplay.tsx';

function App() {
	const [foodData, setFoodData] = useState<FoodDataType | null>(null);

	return (
		<>
			{foodData 
				? <FoodDataDisplay foodData={foodData} />  // Use FoodDataDisplay component here
				: <Capturer updateFoodData={setFoodData} />
			}

			<p>
				foodData: {foodData ? JSON.stringify(foodData) : 'null'}
			</p>
		</>
	)
}

export default App
