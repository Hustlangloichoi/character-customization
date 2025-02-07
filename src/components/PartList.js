import React from 'react';
import Part from "./Part";


const PartList= ({partname, totalParts, setHandlePartChoice, handlePartChoice}) =>{
    const partList = [];
        const total = totalParts[partname];
        for (let i = 1; i <=total; i++){
            partList.push(<Part key={i} url ={`${partname}/${i}.png`} index = {i} setHandlePartChoice={setHandlePartChoice} handlePartChoice={handlePartChoice} partname={partname} />)
        };

    return(
        <>
        <div>
            <h3>{partname}</h3>
            <div>{partList}</div>
        </div>
        </>
    );
};
export default PartList;

