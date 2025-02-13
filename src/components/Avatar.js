import React from 'react';
const Avatar = ({handlePartChoice, randomizeButton}) =>{
    return(
    <>
        <img
            src={`body/${handlePartChoice.body}.png`}
            alt="body"
            className='body_layer avatar_img'
      />
        <img
            src={`eyes/${handlePartChoice.eyes}.png`}
            alt="eyes"
            className='eyes_layer avatar_img'
      />
        <img
            src={`noses/${handlePartChoice.noses}.png`}
            alt="noses"
            className='noses_layer avatar_img'
       />
        <img
            src={`hair/${handlePartChoice.hair}.png`}
            alt="hair"
            className='hair_layer avatar_img'
      />
        <img
            src={`facial_hair/${handlePartChoice.facial_hair}.png`}
            alt="facial_hair"
            className='facial_hair_layer avatar_img'
        />
        <img
            src={`mouths/${handlePartChoice.mouths}.png`}
            alt="mouths"
            className='mouths_layer avatar_img'        />
        <img
            src={`eyebrows/${handlePartChoice.eyebrows}.png`}
            alt="eyebrows"
            className='eyebrows_layer avatar_img'
        />

        {handlePartChoice.earrings !==0 && (<img
            src={`earrings/${handlePartChoice.earrings}.png`}
            alt="earrings"
            className='earrings_layer avatar_img'
        />)}      

        {handlePartChoice.glasses !==0 && (<img
            src={`glasses/${handlePartChoice.glasses}.png`}
            alt="glasses"
            className='glasses_layer avatar_img'
        />)}
        {handlePartChoice.hats !==0 && (<img
            src={`hats/${handlePartChoice.hats}.png`}
            alt="hats"
            className='hats_layer avatar_img'
      />)}     
        {handlePartChoice.neckwear !==0 && (<img
            src={`neckwear/${handlePartChoice.neckwear}.png`}
            alt="neckwear"
            className='neckwear_layer avatar_img'
        /> )}     
        <img
            src={`clothes_layer1/${handlePartChoice.clothes_layer1}.png`}
            alt="clothes_layer1"
            className='clothes_layer1 avatar_img'
        />
        <img
            src={`clothes_layer2/${handlePartChoice.clothes_layer2}.png`}
            alt="clothes_layer2"
            className='clothes_layer2 avatar_img'
        />
        <img
            src={`clothes_layer3/${handlePartChoice.clothes_layer2}.png`}
            alt="clothes_layer3"
            className='clothes_layer3 avatar_img'
        />

<button className="randomize"
    onClick={()=> randomizeButton()}>
        Randomize
</button>
    </>
    );
};
export default Avatar;