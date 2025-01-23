import React from 'react';
const Avatar = ({handlePartChoice}) =>{
    return(
    <>
        <img
            src={`body/${handlePartChoice.body}.png`}
            alt="body"
            className='body_layer'
        />
        <img
            src={`eyes/${handlePartChoice.eyes}.png`}
            alt="eyes"
            className='eyes_layer'
        />
        <img
            src={`noses/${handlePartChoice.noses}.png`}
            alt="noses"
            className='noses_layer'
        />
        <img
            src={`hair/${handlePartChoice.hair}.png`}
            alt="hair"
            className='hair_layer'
        />
        <img
            src={`facial_hair/${handlePartChoice.facial_hair}.png`}
            alt="facial_hair"
            className='facial_hair_layer'
        />
        <img
            src={`mouths/${handlePartChoice.mouths}.png`}
            alt="mouths"
            className='mouths_layer'
        />
        <img
            src={`eyebrows/${handlePartChoice.eyebrows}.png`}
            alt="eyebrows"
            className='eyebrows_layer'
        />

        {handlePartChoice.earrings !==0 && (<img
            src={`accessories/earrings/${handlePartChoice.earrings}.png`}
            alt="earrings"
            className='earrings_layer'
        />)}      

        {handlePartChoice.glasses !==0 && (<img
            src={`accessories/glasses/${handlePartChoice.glasses}.png`}
            alt="glasses"
            className='glasses_layer'
        />)}
        {handlePartChoice.hats !==0 && (<img
            src={`accessories/hats/${handlePartChoice.hats}.png`}
            alt="hats"
            className='hats_layer'
        />)}     
        {handlePartChoice.neckwear !==0 && (<img
            src={`accessories/neckwear/${handlePartChoice.neckwear}.png`}
            alt="neckwear"
            className='neckwear_layer'
        /> )}     
        <img
            src={`clothes/layer_1/${handlePartChoice.clothes_layer1}.png`}
            alt="clothes_layer1"
            className='clothes_layer1'
        />
        <img
            src={`clothes/layer_2/${handlePartChoice.clothes_layer2}.png`}
            alt="clothes_layer2"
            className='clothes_layer2'
        />
        <img
            src={`clothes/layer_3/${handlePartChoice.clothes_layer2}.png`}
            alt="clothes_layer3"
            className='clothes_layer3'
        />
    </>
    );
};
export default Avatar;