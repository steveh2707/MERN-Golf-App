import React from "react"

function EachHoleInput(props) {

    return (
        <div className='row'>
            <p className="holeNo">{props.hole}</p>
            <input
                type="text"
                className="holeName"
                value={props.holeNameState}
                placeholder="Name"
                onChange={(event) => props.setName(event.target.value)}
            />
            <input
                type="number"
                className="yellowYds"
                value={props.holeYdsState}
                placeholder="Yds"
                onChange={(event) => props.setYards(event.target.value)}
            />
            <input
                type="number"
                className="parSI"
                value={props.par}
                placeholder="Par"
                onChange={(event) => props.setPar(event.target.value)}
            />
            <input
                type="number"
                className="parSI"
                value={props.SI}
                placeholder="SI"
                onChange={(event) => props.setSI(event.target.value)}
            />
        </div>
    )
}

export default EachHoleInput