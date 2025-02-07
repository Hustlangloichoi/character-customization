import React from "react";

const Part = ({url, setHandlePartChoice, handlePartChoice, partname, index }) => {
    return (<button className="part"
    onClick={()=> setHandlePartChoice({...handlePartChoice, [partname]: index})}>
        <img className="img" src={url} alt="" />
</button>
)
}

export default Part;

//pass partname vao