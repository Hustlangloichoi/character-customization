import React from 'react';

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
    return(
        <>
        <div>
            <h3>title</h3>
            <div>
                {(() => {
                     const buttons = [];
                     for (let i = 0; i < 12; i++) {
                        buttons.push (
                            <button key={i}>
                                <img src='body/1.png' alt=""></img>
                            </button>
                        );
                     }
                     return buttons;
                })
            }
            </div>
        </div>
        </>
    );
};
export default PartList;