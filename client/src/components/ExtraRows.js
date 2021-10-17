import React from "react";

function ExtraRows(props){
    
    return (
        <div className='row'>
        <p className="holeNo"></p>
        <p className="holeTotals">{props.text}</p>
        <p className="yellowYds">{props.yellowYds}</p>
        <p className="parSI">{props.par}</p>
        <p className="parSI">{props.SI}</p>
        <p className="scoreInput">{props.shots}</p>
        <p className="parSI">{props.points}</p>
    </div>
    )
}

export default ExtraRows