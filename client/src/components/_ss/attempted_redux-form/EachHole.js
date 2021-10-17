import React from "react"
import { Field } from 'redux-form'

function EachHole(props) {

    return (
        <div className='row'>
            <p className="holeNo">{props.hole}</p>
            <p className="holeName">{props.name}</p>
            <p className="yellowYds">{props.yellowYds}</p>
            <p className="parSI">{props.par}</p>
            <p className="parSI">{props.SI}</p>
            <Field
                name={"shots" + props.hole}
                component="input"
                type="number"
                className="scoreInput"
            />
            <p className="scoreInput">{props.score}</p>
        </div>
    )
}

export default EachHole