import React, {useState} from 'react';
import './App.css';
import Avatar from './components/Avatar';
import PartList from './components/PartList';


const totalParts = {
  body: 17,
  eyes: 17,
  noses: 1,
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
const randomizeNumber = (part) => {
  const max = totalParts[part];
  const randomNumber = Math.floor(Math.random() * max) + 1;
  return randomNumber;
};

function App() {
  const [handlePartChoice, setHandlePartChoice] = useState(Object.fromEntries(
    Object.keys(totalParts).map((key) => [key, randomizeNumber(key)])
  ))
  const randomizeButton = () => {
    setHandlePartChoice(
      Object.fromEntries(
        Object.keys(totalParts).map((key) => [key, randomizeNumber(key)])
      )
    );
  };

  return (
  <div className='app-container'>
    <div className='avatar'>
      <Avatar handlePartChoice = {handlePartChoice} randomizeButton={randomizeButton}/>
    </div>
    <div className='allPartLists'>
      {Object.keys(totalParts).map((key, index) => (
      <PartList key={index} partname={key} totalParts={totalParts} setHandlePartChoice={setHandlePartChoice} handlePartChoice={handlePartChoice} />
    ))}
    </div>
  </div>
  );
}

export default App;
