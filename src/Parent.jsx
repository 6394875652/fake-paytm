










import React, { useState, useRef } from 'react';
import { Home } from './component/Home';
import sound from './images/sound.mp3'; // Ensure the path is correct
import './parent.css'
import logo from './component/logo.png'

function ParentComponent() {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [number, setNumber] = useState('');
  const [showParent, setShowParent] = useState(true);
  
  const audioRef = useRef(null);

  const handleButtonClick = () => { // Corrected the function name here
    // Check if audioRef is properly defined and play the audio
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    // Hide the parent component
    setShowParent(false); 
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'inputText1') {
      setInputText1(value);
    } else if (name === 'inputText2') {
      setInputText2(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      {showParent ? (
        <div className='main'>
          <img src={logo} alt=''/>
          <input 
            type="text" 
            name="inputText1"
            value={inputText1} 
            onChange={handleInputChange} 
            placeholder="Short name"
            maxlength="2"
          />
          <input 
            type="text" 
            name="inputText2"
            value={inputText2} 
            onChange={handleInputChange} 
            placeholder="User name"
          />
          <input
            type="number"
            name="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Rupee"
          />
          <button onClick={handleButtonClick}>
            Pay Now
          </button>
          <audio ref={audioRef} src={sound} preload="auto" />
          <div className='creator'>
        <p>Created By- Yadav Ji</p>
      </div>
        </div>
      ) : (
        <Home text1={inputText1} text2={inputText2} number={number} />
      )}
     
      
    </div>
  );
}

export default ParentComponent;

