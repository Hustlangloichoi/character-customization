import React from 'react';
import Part from "./Part";


const PartList= ({partname, totalParts}) =>{
    const partList = [];
        const total = totalParts[partname];
        for (let i = 1; i <=total; i++){
            partList.push(<Part url ={`${partname}/${i}.png`}/>)
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

