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
        <div className='list'>
            <h3 className='list-title'>{partname}</h3>
            <div className='partList'>{partList}</div>
        </div>
        </>
    );
};
export default PartList;

