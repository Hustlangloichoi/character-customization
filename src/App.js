import React, {useState} from 'react';
import './App.css';
import Avatar from './components/Avatar';
import PartList from './components/PartList';

const totalParts = {
  body: 17,
  eyes: 17,
  nose: 1,
  hair: 73,
  facial_hair:17,
  mouths: 24,
  eyebrows: 15,
  earrings:32,
  glasses: 17,
  hats: 28,
  neckwear:18,
  clothes_layer1: 5,
  clothes_layer2: 5,
  clothes_layer3: 9,
};

function App() {
  const [handlePartChoice, sethandlePartChoice] = useState({
    body: 1,
    eyes: 1,
    noses: 1,
    hair: 1,
    facial_hair:1,
    mouths: 1,
    eyebrows: 1,
    earrings: 0,
    glasses: 0,
    hats: 0,
    neckwear:0,
    clothes_layer1: 1,
    clothes_layer2: 1,
    clothes_layer3: 1,
  })
  return (
  <div className='app-container'>
    <div>
      <Avatar handlePartChoice = {handlePartChoice}/>
    </div>
    
    <div>
      <PartList/>
    </div>
  </div>
  );
}

export default App;
