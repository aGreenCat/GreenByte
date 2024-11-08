import { useState } from 'react';
import './App.css'
import Capturer from "./components/Capturer.tsx";
import { FoodDataType } from "./components/Capturer.tsx";
import FoodDataDisplay from './components/FoodDataDisplay.tsx';
import Modal from './components/Modal.tsx';

function App() {
	const [foodData, setFoodData] = useState<FoodDataType | null>(null);
  const [showModal, setShowModal] = useState(false); // State to track modal visibility

  const openModal = () => setShowModal(true); // Function to open the modal
  const closeModal = () => setShowModal(false); // Function to close the modal

	return (
		<>
			{foodData 
				? <FoodDataDisplay foodData={foodData} />  // Use FoodDataDisplay component here
				: <Capturer updateFoodData={setFoodData} />
			}

			<p>
				foodData: {foodData ? JSON.stringify(foodData) : 'null'}
			</p>
      {/* Button to trigger modal */}
      <button onClick={openModal}>Show About Me</button>

      {/* Modal component that shows based on showModal state */}
      {showModal && <Modal showModal={showModal} closeModal={closeModal} />}
      
		</>
	)
}

export default App
