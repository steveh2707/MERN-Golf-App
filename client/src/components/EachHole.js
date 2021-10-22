import React from "react"

function EachHole(props) {

    let visualPoints = ""

    if (props.score !== 0) {
        visualPoints = props.score
    }

    return (
        <div className='row'>
            <p className="holeNo">{props.hole}</p>
            <p className="holeName">{props.name}</p>
            <p className="yellowYds">{props.yellowYds}</p>
            <p className="parSI">{props.par}</p>
            <p className="parSI">{props.SI}</p>
            <input
                type="number"
                className="scoreInput"
                value={props.shotsState}
                placeholder="Shots"
                onChange={(event) => props.setShots(event.target.value)}
            />
            <p className="scoreInput">{visualPoints}</p>
        </div>
    )
}

export default EachHole