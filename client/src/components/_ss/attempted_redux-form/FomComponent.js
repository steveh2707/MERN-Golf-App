import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import EachHole from "./EachHole"
import pointsCalculator from './pointsCalculator'
import golfCourseData from "./reference/golfCourseData"
import ExtraRows from "./ExtraRows"
import arraySummer from './arraySummer'
import {getRounds} from "../actions/roundActions"
import PropTypes from "prop-types"



let FormComponentForm = props => {

    useEffect(() => {
        getRounds()
      }, []);

    const { courseValue, handicap, shots1, shots2, shots3, shots4, shots5, shots6, shots7, shots8, shots9, shots10, shots11, shots12, shots13, shots14, shots15, shots16, shots17, shots18, handleSubmit, pristine, reset, submitting } = props

    let allCourseNames = []
    for (let i = 0; i < golfCourseData.length; i++) {
        allCourseNames.push(golfCourseData[i].courseName)
    }

    let courseIndex = allCourseNames.indexOf(courseValue)

    let courseHandicap = 0
    let playingHandicap = 0
    let slopeRatingYellow = ""
    let allHoleNames = []
    let allHolePars = []
    let allHoleSIs = []
    let allHoleYds = []
    let onetoeighteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    let allShots = [shots1, shots2, shots3, shots4, shots5, shots6, shots7, shots8, shots9, shots10, shots11, shots12, shots13, shots14, shots15, shots16, shots17, shots18]

    if (courseIndex >= 0) {
        slopeRatingYellow = golfCourseData[courseIndex].slopeRatingYellow
        courseHandicap = Math.round(handicap * slopeRatingYellow / 113) || 0
        playingHandicap = Math.round(courseHandicap * 0.95 || 0)
        for (let i = 1; i <= 18; i++) {
            allHoleNames.push(golfCourseData[courseIndex].holes[i].name)
            allHolePars.push(golfCourseData[courseIndex].holes[i].par)
            allHoleSIs.push(golfCourseData[courseIndex].holes[i].SI)
            allHoleYds.push(golfCourseData[courseIndex].holes[i].yellowYds)
        }
    }

    let allPoints = []
    for (let i = 0; i < 18; i++) {
        if (allShots[i]) {
            allPoints[i] = pointsCalculator(playingHandicap, allShots[i], allHolePars[i], allHoleSIs[i])
        } else {
            allPoints[i] = ""
        }
    }

    let front9Shots = arraySummer(allShots.slice(0, 9))
    let front9Par = arraySummer(allHolePars.slice(0, 9))
    let front9YellowYds = arraySummer(allHoleYds.slice(0, 9))
    let front9Points = arraySummer(allPoints.slice(0, 9))
    let back9Shots = arraySummer(allShots.slice(9, 18))
    let back9Par = arraySummer(allHolePars.slice(9, 18))
    let back9YellowYds = arraySummer(allHoleYds.slice(9, 18))
    let back9Points = arraySummer(allPoints.slice(9, 18))

    return (
        <div className="center">
            <h1>Scorecard Calculator </h1>
            <br />

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <p className="topLeft">Course</p>
                    <Field
                        name="course"
                        component="select"
                        className="courseSelector">
                        <option value="">-- Please Select a Golf Course --</option>
                        {allCourseNames.map(course => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </Field>
                </div>

                <div className='row'>
                    <p className="topLeft">Date</p>
                    <Field
                        className="playerName"
                        name="Date"
                        component="input"
                        type="date"
                    />
                    <p className="handicapTitle">H'CAP INDEX</p>
                    <p className="handicapTitle">COURSE H'CAP</p>
                    <p className="handicapTitle">PLAYING H'CAP</p>
                </div>

                <div className='row'>
                    <p className="topLeft">Player A</p>
                    <Field
                        className="playerName"
                        name="PlayerA"
                        component="input"
                        type="text"
                    />
                    <Field
                        className="scoreInput"
                        name="handicap"
                        component="input"
                        type="number"
                    />
                    <p className="parSI">{courseHandicap}</p>
                    <p className="parSI">{playingHandicap}</p>
                </div>

                <div className='row'>
                    <p className="holeNo">Hole</p>
                    <p className="holeNameTitle">NAME</p>
                    <p className="parSI">YDS</p>
                    <p className="scoreInput">Par</p>
                    <p className="parSI">SI</p>
                    <p className="parSI">A</p>
                    <p className="parSI">PTS</p>
                </div>

                {onetoeighteen.slice(0, 9).map(holeno => (
                    <EachHole
                        hole={holeno}
                        name={allHoleNames[holeno - 1]}
                        par={allHolePars[holeno - 1]}
                        SI={allHoleSIs[holeno - 1]}
                        yellowYds={allHoleYds[holeno - 1]}
                        score={allPoints[holeno - 1]}
                    />
                ))}

                <ExtraRows
                    text={"OUT"}
                    yellowYds={front9YellowYds}
                    par={front9Par}
                    shots={front9Shots}
                    points={front9Points}
                />

                {onetoeighteen.slice(9, 18).map(holeno => (
                    <EachHole
                        hole={holeno}
                        name={allHoleNames[holeno - 1]}
                        par={allHolePars[holeno - 1]}
                        SI={allHoleSIs[holeno - 1]}
                        yellowYds={allHoleYds[holeno - 1]}
                        score={allPoints[holeno - 1]}
                    />
                ))}

                <ExtraRows
                    text={"IN"}
                    yellowYds={back9YellowYds}
                    par={back9Par}
                    shots={back9Shots}
                    points={back9Points}
                />

                <ExtraRows
                    text={"OUT"}
                    yellowYds={front9YellowYds}
                    par={front9Par}
                    shots={front9Shots}
                    points={front9Points}
                />

                <ExtraRows
                    text={"TOTAL"}
                    yellowYds={front9YellowYds + back9YellowYds}
                    par={front9Par + back9Par}
                    shots={front9Shots + back9Shots}
                    points={front9Points + back9Points}
                />

                <ExtraRows
                    text={"SLOPE RATING"}
                    yellowYds={slopeRatingYellow}
                    par={""}
                    shots={playingHandicap}
                    SI={"H'CAP"}
                />

                <ExtraRows
                    shots={front9Shots + back9Shots - playingHandicap}
                    SI={"NETT"}
                />

                <br />

                <div>
                    <button type="submit" disabled={pristine || submitting} onClick={handleSubmit}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        </div>
    )
}

// FormComponentForm.propTypes = {
//     getRounds: PropTypes.func.isRequired,
//     round: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     round: state.round
// })

// FormComponentForm = reduxForm({
//     round: 'FormComponent',
// })(FormComponentForm)

// export default connect(mapStateToProps, { getRounds })(FormComponentForm)

FormComponentForm = reduxForm({
    form: 'FormComponent',
})(FormComponentForm)

const selector = formValueSelector('FormComponent')

FormComponentForm = connect(state => {
    const courseValue = selector(state, "course")
    const handicap = selector(state, "handicap")
    const shots1 = selector(state, "shots1")
    const shots2 = selector(state, "shots2")
    const shots3 = selector(state, "shots3")
    const shots4 = selector(state, "shots4")
    const shots5 = selector(state, "shots5")
    const shots6 = selector(state, "shots6")
    const shots7 = selector(state, "shots7")
    const shots8 = selector(state, "shots8")
    const shots9 = selector(state, "shots9")
    const shots10 = selector(state, "shots10")
    const shots11 = selector(state, "shots11")
    const shots12 = selector(state, "shots12")
    const shots13 = selector(state, "shots13")
    const shots14 = selector(state, "shots14")
    const shots15 = selector(state, "shots15")
    const shots16 = selector(state, "shots16")
    const shots17 = selector(state, "shots17")
    const shots18 = selector(state, "shots18")
    return {
        courseValue,
        handicap,
        shots1,
        shots2,
        shots3,
        shots4,
        shots5,
        shots6,
        shots7,
        shots8,
        shots9,
        shots10,
        shots11,
        shots12,
        shots13,
        shots14,
        shots15,
        shots16,
        shots17,
        shots18,
    }
})(FormComponentForm)

export default FormComponentForm