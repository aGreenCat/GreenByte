import './App.css'
import Capturer from "./components/Capturer.tsx";
import { useState } from 'react'; // Import useState for modal control
import Modal from './components/Modal'; // Import the Modal component


function App() {

  const [showModal, setShowModal] = useState(false); // State to track modal visibility

  const openModal = () => setShowModal(true); // Function to open the modal
  const closeModal = () => setShowModal(false); // Function to close the modal

  return (
    <>
      <Capturer />

      {/* Button to trigger modal */}
      <button onClick={openModal}>Show About Me</button>

      {/* Modal component that shows based on showModal state */}
      {showModal && <Modal showModal={showModal} closeModal={closeModal} />}
    </>
  )
}

export default App
