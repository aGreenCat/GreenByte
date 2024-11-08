import { useState } from 'react';
import './App.css'
import Capturer, {CaptureType} from "./components/Capturer.tsx";
import { FoodDataType } from "./components/Capturer.tsx";

function App() {
	const [foodData, setFoodData] = useState<FoodDataType | null>(null);
	const [version, setVersion] = useState<CaptureType>('upload');
	
	return (
		<>
			<h1>GreenBytes</h1>
			{foodData 
				? <div>
					<p>Food: {foodData.food_name}</p>	

					<button onClick={() => {
						setFoodData(null);
					}}>Submit Another</button>
				</div>
				: <Capturer updateFoodData={setFoodData} version={version}/>
			}
		</>
	)
}

export default App
