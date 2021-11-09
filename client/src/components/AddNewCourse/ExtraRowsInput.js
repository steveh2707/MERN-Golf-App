import React from "react";

function ExtraRowsInput(props){
    
    return (
        <div className='row'>
        <p className="holeNo"></p>
        <p className="holeTotals">{props.text}</p>
        <p className="yellowYds">{props.yellowYds}</p>
        <p className="parSI">{props.par}</p>
        <p className="parSI">{props.SI}</p>
    </div>
    )
}

export default ExtraRowsInput