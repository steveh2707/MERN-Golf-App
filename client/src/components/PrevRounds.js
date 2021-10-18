import React, { useEffect, useState } from "react"
import { getRounds, deleteRound, addRound } from "../actions/roundActions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Container, ListGroup, ListGroupItem, Button, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function PrevRounds(props) {

    const styles = {
        cell: {
            padding: "0.3rem",

        },
        heading: {
            padding: "0.3rem"
        }
    }

    useEffect(() => {
        props.getRounds()
    }, []);

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")


    const { rounds } = props.round;

    let namesArr = []
    let courseArr = []

    for (let i = 0; i < rounds.length; i++) {
        namesArr.push(rounds[i].playerA)
        courseArr.push(rounds[i].course)
    }

    let namesArrNoDup = [...new Set(namesArr)];
    let courseArrNoDup =  [...new Set(courseArr)];


    let filteredRounds = []

    if (name === "" && course === "") {
        filteredRounds = rounds
    } else if (name !== "" && course === "") {
        filteredRounds = rounds.filter(element => element.playerA === name)
    } else if (name === "" && course !== "") {
        filteredRounds = rounds.filter(element => element.course === course)
    } else if (name !== "" && course !== "") {
        filteredRounds = rounds.filter(element => element.playerA === name).filter(element => element.course === course)
    }

        return (
            <div className="tablecenter">
                {/* <Container>
                <ListGroup>
                    <TransitionGroup >
                        {rounds.map(({ _id, playerA, course }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => props.deleteRound(_id)
                                        }
                                    >
                                        &times;
                                    </Button>
                                    {_id + playerA + " " + course + " "}
                                </ListGroupItem>

                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container> */}
                <h2>Previous Rounds</h2>


                <Table>
                    <thead>
                        <tr>
                            <th style={styles.cell}>Date</th>
                            <th style={styles.cell}>
                                <select
                                    className="nameSelector"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    name="name"
                                >
                                    <option value="">Name</option>
                                    {namesArrNoDup.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </th>
                            <th style={styles.cell}>
                                <select
                                    className="nameSelector"
                                    value={course}
                                    onChange={(event) => setCourse(event.target.value)}
                                    name="course"
                                >
                                    <option value="">Course</option>
                                    {courseArrNoDup.map(course => (
                                        <option key={course} value={course}>{course}</option>
                                    ))}
                                </select>
                            </th>
                            <th className="cellcenter" style={styles.cell}>Hcap</th>
                            <th className="cellcenter" style={styles.cell}>1</th>
                            <th className="cellcenter" style={styles.cell}>2</th>
                            <th className="cellcenter" style={styles.cell}>3</th>
                            <th className="cellcenter" style={styles.cell}>4</th>
                            <th className="cellcenter" style={styles.cell}>5</th>
                            <th className="cellcenter" style={styles.cell}>6</th>
                            <th className="cellcenter" style={styles.cell}>7</th>
                            <th className="cellcenter" style={styles.cell}>8</th>
                            <th className="cellcenter" style={styles.cell}>9</th>
                            <th className="cellcenter" style={styles.cell}>10</th>
                            <th className="cellcenter" style={styles.cell}>11</th>
                            <th className="cellcenter" style={styles.cell}>12</th>
                            <th className="cellcenter" style={styles.cell}>13</th>
                            <th className="cellcenter" style={styles.cell}>14</th>
                            <th className="cellcenter" style={styles.cell}>15</th>
                            <th className="cellcenter" style={styles.cell}>16</th>
                            <th className="cellcenter" style={styles.cell}>17</th>
                            <th className="cellcenter" style={styles.cell}>18</th>
                            <th className="cellcenter" style={styles.cell}>NETT</th>
                            <th className="cellcenter" style={styles.cell}>PTS</th>
                            <th className="cellcenter" style={styles.cell}></th>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredRounds.map(({ _id, datePlayed, playerA, course, handicap, shots1, shots2, shots3, shots4, shots5, shots6, shots7, shots8, shots9, shots10, shots11, shots12, shots13, shots14, shots15, shots16, shots17, shots18, points1, points2, points3, points4, points5, points6, points7, points8, points9, points10, points11, points12, points13, points14, points15, points16, points17, points18 }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <tr>
                                    <td style={styles.cell} scope="row">{(datePlayed) ? datePlayed.toString().substring(0, 10) : "Unknown"}</td>
                                    <td style={styles.cell}>{playerA}</td>
                                    <td style={styles.cell}>{course}</td>
                                    <td className="cellcenter" style={styles.cell}>{handicap}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots1 + " (" + points1 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots2 + " (" + points2 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots3 + " (" + points3 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots4 + " (" + points4 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots5 + " (" + points5 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots6 + " (" + points6 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots7 + " (" + points7 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots8 + " (" + points8 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots9 + " (" + points9 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots10 + " (" + points10 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots11 + " (" + points11 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots12 + " (" + points12 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots13 + " (" + points13 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots14 + " (" + points14 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots15 + " (" + points15 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots16 + " (" + points16 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots17 + " (" + points17 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots18 + " (" + points18 + ")"}</td>
                                    <td className="cellcenter" style={styles.cell}>{shots1 + shots2 + shots3 + shots4 + shots5 + shots6 + shots7 + shots8 + shots9 + shots10 + shots11 + shots12 + shots13 + shots14 + shots15 + shots16 + shots17 + shots18 - handicap}</td>
                                    <td className="cellcenter" style={styles.cell}>{points1 + points2 + points3 + points4 + points5 + points6 + points7 + points8 + points9 + points10 + points11 + points12 + points13 + points14 + points15 + points16 + points17 + points18}</td>
                                    <td className="cellcenter" style={styles.cell}><Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => props.deleteRound(_id)
                                        }
                                    >
                                        &times;
                                    </Button> </td>
                                </tr>
                            </CSSTransition>
                        ))}
                    </tbody>
                </Table>

                <p className="rightjustify">Shots (Points)</p>


            </div>
        )

    }

    PrevRounds.propTypes = {
        getRounds: PropTypes.func.isRequired,
        round: PropTypes.object.isRequired
    }

    const mapStateToProps = (state) => ({
        round: state.round
    })

    export default connect(mapStateToProps, { getRounds, deleteRound, addRound })(PrevRounds)