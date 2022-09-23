import React from "react";

const SlotMach = (props) => {

    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
    
    let {x,y,z} = props;   // Object Destruction

    if(x===y && y===z){
        return (
            <>
             <div className="slotinner">
            <h1>
               {x}{y}{z}
            </h1>
            <h1>This is Matching</h1>
            </div>
            </>
        )
    }
    else{
        return (
            <>
             <div className="slotinner">
            <h1>
               {x}{y}{z}
            </h1>
            <h1>This is not Matching</h1>
            
            </div>
            </>
        )
    }

}

export default SlotMach;