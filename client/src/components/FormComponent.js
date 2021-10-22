import React, { useState, useEffect } from "react"
import EachHole from "./EachHole"
import ExtraRows from "./ExtraRows"
import arraySummer from "./arraySummer"
import { Button } from "reactstrap"
import pointsCalculator from "./pointsCalculator"
import { connect } from "react-redux"
import { addRound } from "../actions/roundActions"
import { getCourses } from "../actions/courseActions"
import PropTypes from "prop-types"



function FormComponent(props) {

    useEffect(() => {
        props.getCourses()
    }, []);

    const { courses } = props.course;

    function onSubmit(e) {
        e.preventDefault()
        const newRound = {
            playerA: playerA,
            course: course,
            datePlayed: date,
            handicap: playingHandicap,
            shots1: shots1,
            shots2: shots2,
            shots3: shots3,
            shots4: shots4,
            shots5: shots5,
            shots6: shots6,
            shots7: shots7,
            shots8: shots8,
            shots9: shots9,
            shots10: shots10,
            shots11: shots11,
            shots12: shots12,
            shots13: shots13,
            shots14: shots14,
            shots15: shots15,
            shots16: shots16,
            shots17: shots17,
            shots18: shots18,
            points1: allPoints[0],
            points2: allPoints[1],
            points3: allPoints[2],
            points4: allPoints[3],
            points5: allPoints[4],
            points6: allPoints[5],
            points7: allPoints[6],
            points8: allPoints[7],
            points9: allPoints[8],
            points10: allPoints[9],
            points11: allPoints[10],
            points12: allPoints[11],
            points13: allPoints[12],
            points14: allPoints[13],
            points15: allPoints[14],
            points16: allPoints[15],
            points17: allPoints[16],
            points18: allPoints[17],
        }
        props.addRound(newRound)
    }

    // Set all states for inputting data

    const [playerA, setPlayerA] = useState("")
    const [course, setCourse] = useState("")
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [handicap, setHandicap] = useState("")

    const [shots1, setShots1] = useState(0)
    const [shots2, setShots2] = useState(0)
    const [shots3, setShots3] = useState(0)
    const [shots4, setShots4] = useState(0)
    const [shots5, setShots5] = useState(0)
    const [shots6, setShots6] = useState(0)
    const [shots7, setShots7] = useState(0)
    const [shots8, setShots8] = useState(0)
    const [shots9, setShots9] = useState(0)
    const [shots10, setShots10] = useState(0)
    const [shots11, setShots11] = useState(0)
    const [shots12, setShots12] = useState(0)
    const [shots13, setShots13] = useState(0)
    const [shots14, setShots14] = useState(0)
    const [shots15, setShots15] = useState(0)
    const [shots16, setShots16] = useState(0)
    const [shots17, setShots17] = useState(0)
    const [shots18, setShots18] = useState(0)

    function clearState() {
        setPlayerA("")
        setHandicap("")
        setCourse("")
        setDate(new Date().toISOString().slice(0, 10))
        setHandicap("")
        setShots1(0)
        setShots2(0)
        setShots3(0)
        setShots4(0)
        setShots5(0)
        setShots6(0)
        setShots7(0)
        setShots8(0)
        setShots9(0)
        setShots10(0)
        setShots11(0)
        setShots12(0)
        setShots13(0)
        setShots14(0)
        setShots15(0)
        setShots16(0)
        setShots17(0)
        setShots18(0)
    }


    // Create arrays of all shots and setShots from state
    let allShots = [shots1, shots2, shots3, shots4, shots5, shots6, shots7, shots8, shots9, shots10, shots11, shots12, shots13, shots14, shots15, shots16, shots17, shots18]

    let allSetShots = [setShots1, setShots2, setShots3, setShots4, setShots5, setShots6, setShots7, setShots8, setShots9, setShots10, setShots11, setShots12, setShots13, setShots14, setShots15, setShots16, setShots17, setShots18]

    let allCourseNames = []
    for (let i = 0; i < courses.length; i++) {
        allCourseNames.push(courses[i].courseName)
    }

    let courseIndex = allCourseNames.indexOf(course)

    let courseHandicap = 0
    let playingHandicap = 0
    let slopeRatingYellow = ""
    let allHoleNames = []
    let allHolePars = []
    let allHoleSIs = []
    let allHoleYds = []
    let onetoeighteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]


    if (courseIndex >= 0) {
        slopeRatingYellow = courses[courseIndex].slopeRatingYellow
        courseHandicap = Math.round(handicap * slopeRatingYellow / 113) || 0
        playingHandicap = Math.round(courseHandicap * 0.95 || 0)
        for (let i = 1; i <= 18; i++) {
            allHoleNames.push(courses[courseIndex].holes[i].name)
            allHolePars.push(courses[courseIndex].holes[i].par)
            allHoleSIs.push(courses[courseIndex].holes[i].SI)
            allHoleYds.push(courses[courseIndex].holes[i].yellowYds)
        }
    }

    let allPoints = []
    for (let i = 0; i < 18; i++) {
        if (allShots[i]) {
            allPoints[i] = pointsCalculator(playingHandicap, allShots[i], allHolePars[i], allHoleSIs[i])
        } else {
            allPoints[i] = 0
            allShots[i] = ""
        }
    }

    let front9shots = arraySummer(allShots.slice(0, 9))
    let front9par = arraySummer(allHolePars.slice(0, 9))
    let front9yards = arraySummer(allHoleYds.slice(0, 9))
    let front9Points = arraySummer(allPoints.slice(0, 9))
    let back9shots = arraySummer(allShots.slice(9, 18))
    let back9par = arraySummer(allHolePars.slice(9, 18))
    let back9yards = arraySummer(allHoleYds.slice(9, 18))
    let back9Points = arraySummer(allPoints.slice(9, 18))

    return (
        <div className="center">
            <h1>Scorecard Calculator
            </h1>
            <br />

            <form onSubmit={onSubmit}>
                <div className='row'>
                    <p className="topLeft">Course</p>
                    <select
                        className="courseSelector"
                        value={course}
                        onChange={(event) => setCourse(event.target.value)}
                        name="course"
                    >
                        <option value="">-- Please Select a Golf Course --</option>
                        {allCourseNames.map((course,index) => (
                            <option key={index} value={course}>{course}</option>
                        ))}
                    </select>
                </div>

                <div className='row'>
                    <p className="topLeft">Date</p>
                    <input
                        className="playerName"
                        value={date}
                        name="date"
                        placeholder="Enter Date"
                        type="date"
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <p className="handicapTitle">H'CAP INDEX</p>
                    <p className="handicapTitle">COURSE H'CAP</p>
                    <p className="handicapTitle">PLAYING H'CAP</p>
                </div>

                <div className='row'>
                    <p className="topLeft">Player A</p>
                    <input
                        className="playerName"
                        value={playerA}
                        name="playerA"
                        placeholder="Enter Name"
                        onChange={(event) => setPlayerA(event.target.value)}
                    />
                    <input
                        type="number"
                        value={handicap}
                        name="handicap"
                        placeholder="Enter"
                        onChange={(event) => setHandicap(event.target.value)}
                        className="scoreInput"
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
                        key={holeno}
                        hole={holeno}
                        shotsState={allShots[holeno - 1]}
                        setShots={allSetShots[holeno - 1]}
                        name={allHoleNames[holeno - 1]}
                        par={allHolePars[holeno - 1]}
                        SI={allHoleSIs[holeno - 1]}
                        yellowYds={allHoleYds[holeno - 1]}
                        score={allPoints[holeno - 1]}
                    />
                ))}

                <ExtraRows
                    text={"OUT"}
                    yellowYds={front9yards}
                    par={front9par}
                    shots={front9shots}
                    points={front9Points}
                />

                {onetoeighteen.slice(9, 18).map(holeno => (
                    <EachHole
                        key={holeno}
                        hole={holeno}

                        shotsState={allShots[holeno - 1]}
                        setShots={allSetShots[holeno - 1]}
                        name={allHoleNames[holeno - 1]}
                        par={allHolePars[holeno - 1]}
                        SI={allHoleSIs[holeno - 1]}
                        yellowYds={allHoleYds[holeno - 1]}
                        score={allPoints[holeno - 1]}
                    />
                ))}


                <ExtraRows
                    text={"IN"}
                    yellowYds={back9yards}
                    par={back9par}
                    shots={back9shots}
                    points={back9Points}
                />

                <ExtraRows
                    text={"OUT"}
                    yellowYds={front9yards}
                    par={front9par}
                    shots={front9shots}
                    points={front9Points}
                />

                <ExtraRows
                    text={"TOTAL"}
                    yellowYds={front9yards + back9yards}
                    par={front9par + back9par}
                    shots={front9shots + back9shots}
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
                    shots={front9shots + back9shots - playingHandicap}
                    SI={"NETT"}
                />
                <br />


                <div className="rightjustify">
                    <Button color="secondary">Submit</Button>
                    <Button color="danger" onClick={() => clearState()} >Clear</Button>
                </div>

            </form>
        </div>
    )
}

FormComponent.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    round: state.round,
    course: state.course
})


export default connect(mapStateToProps, { addRound, getCourses })(FormComponent)

// const mapStateToProps = (state: IItemReduxProps) => ({
//   item: state.item,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { addItem })(ItemModal);