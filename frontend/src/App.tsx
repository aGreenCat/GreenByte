import { useState } from 'react';
import './App.css'
import Capturer, {CaptureType} from "./components/Capturer.tsx";
import { FoodDataType } from "./components/Capturer.tsx";
import FoodDataDisplay from './components/FoodDataDisplay.tsx';
import Modal from './components/Modal.tsx';
import Banner from './components/Banner';
import LeaderboardModal from './components/LeaderboardModal.tsx'

function App() {
	const [foodData, setFoodData] = useState<FoodDataType | null>(null);
	const [version, setVersion] = useState<CaptureType>('capture');

	const [showModal, setShowModal] = useState(false); // State to track modal visibility
  	const [showLeaderboardModal, setShowLeaderboardModal] = useState(false); // State to track modal visibility


	const openModal = () => setShowModal(true); // Function to open the modal
	const closeModal = () => setShowModal(false); // Function to close the modal

  	const openLeaderboardModal = () => setShowLeaderboardModal(true);
  	const closeLeaderboardModal = () => setShowLeaderboardModal(false)
	
	return (
		<>
		{/* Conditionally render the Banner component only if foodData is null */}
        {<Banner onAboutMeClick={openModal} onLeaderboardClick={openLeaderboardModal}/>}



			{foodData 
				? <div className='main'>
					<FoodDataDisplay foodData={foodData} /> 

					<button onClick={() => {
						setFoodData(null);
					}}>Submit Another</button>
				</div>
				: <>
				<div className='main'>
					<Capturer updateFoodData={setFoodData} version={version}/>
				</div>

				<button onClick={() => {
					setVersion(version === 'capture' ? 'upload' : 'capture');
				}}>Switch to {version === 'capture' ? 'Upload' : 'Capture'}</button>
				</>
			}
      
			{/* Modal component that shows based on showModal state */}
			{showModal && <Modal showModal={showModal} closeModal={closeModal} />}

			{/* Modal component that shows based on showModal state */}
			{showLeaderboardModal && <LeaderboardModal showLeaderboardModal={showLeaderboardModal} closeLeaderboardModal={closeLeaderboardModal} />}

		</>
	)
}

export default App
