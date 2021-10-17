import React from "react"

function EachHole(props) {

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
            <p className="scoreInput">{props.score}</p>
        </div>
    )
}

// onChange={(event) => props.setShots(event.target.value)}
// onBlur={() => props.setPoints([points])}

// onChange={(e) => {props.setShots(e.target.value); props.setPoints([points])}}

// onChange={async (e) => {props.setShots(e.target.value); setTimeout(props.setPoints([points]),1000)}}

export default EachHole