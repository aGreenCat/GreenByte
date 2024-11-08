import { useState } from 'react';
import './App.css'
import Capturer from "./components/Capturer.tsx";
import { FoodDataType } from "./components/Capturer.tsx";

function App() {
	const [foodData, setFoodData] = useState<FoodDataType | null>(null);

	return (
		<>
			{foodData 
				? <div>
					<h1>GreenBytes</h1>
					<p>Food: {foodData.food_name}</p>	
				</div>
				: <Capturer updateFoodData={setFoodData} />
			}

			<p>
				foodData: {foodData ? JSON.stringify(foodData) : 'null'}
			</p>
		</>
	)
}

export default App
