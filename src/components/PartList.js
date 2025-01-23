import React from 'react';
import { Part } from './Part';

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

const PartList= ({partname}) =>{
    const total = totalParts[partname];
    const partList = [];
    for (let i = 0; i <total; i++){
        partList.push(<Part url = />)
    };

    return(
        <>
        <div>
            <h3>title</h3>
        </div>
        </>
    );
};
export default PartList;

