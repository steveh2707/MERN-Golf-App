import React, { useEffect, useState } from "react";
import { getRounds, deleteRound, addRound } from "../actions/roundActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Table } from "reactstrap";
import { CSSTransition } from "react-transition-group";

function PrevRounds(props) {
  const styles = {
    cell: {
      padding: "0.3rem",
    },
    heading: {
      padding: "0.3rem",
    },
  };

  useEffect(() => {
    props.getRounds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function HoleColumns(props) {
    return (
      <th className="cellcenter" style={styles.cell}>
        {props.value}
      </th>
    );
  }

  function RoundRows(props) {
    return (
      <td className="cellcenter" style={styles.cell}>
        {props.shots + " (" + props.points + ")"}
      </td>
    );
  }

  let onetoeighteen = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const { rounds } = props.round;

  let namesArr = [];
  let courseArr = [];

  for (let i = 0; i < rounds.length; i++) {
    namesArr.push(rounds[i].playerA);
    courseArr.push(rounds[i].course);
  }

  let namesArrNoDup = [...new Set(namesArr)];
  let courseArrNoDup = [...new Set(courseArr)];

  let filteredRounds = rounds;

  if (name !== "") {
    filteredRounds = filteredRounds.filter(
      (element) => element.playerA === name
    );
  }

  if (course !== "") {
    filteredRounds = filteredRounds.filter(
      (element) => element.course === course
    );
  }

  return (
    <div className="tablecenter">
      <h2>Previous Rounds</h2>
      <Table>
        <thead>
          <tr>
            <th style={styles.cell}>Date</th>
            <th style={styles.cell}>
              <select
                className="filter"
                value={name}
                onChange={(event) => setName(event.target.value)}
                name="name"
              >
                <option value="">Name</option>
                {namesArrNoDup.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </th>
            <th style={styles.cell}>
              <select
                className="filter"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                name="course"
              >
                <option value="">Course</option>
                {courseArrNoDup.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </th>
            <HoleColumns value="HCAP" />
            {onetoeighteen.slice(0, 18).map((holeno) => (
              <HoleColumns key={holeno} value={holeno} />
            ))}
            <HoleColumns value="NETT" />
            <HoleColumns value="PTS" />
            <HoleColumns value="" />
            <th className="cellcenter" style={styles.cell}></th>
          </tr>
        </thead>

        <tbody>
          {filteredRounds.map((element) => (
            <CSSTransition key={element._id} timeout={500} classNames="fade">
              <tr>
                <td style={styles.cell}>
                  {element.datePlayed
                    ? element.datePlayed.toString().substring(0, 10)
                    : "Unknown"}
                </td>
                <td style={styles.cell}>{element.playerA}</td>
                <td style={styles.cell}>{element.course}</td>
                <td className="cellcenter" style={styles.cell}>
                  {element.handicap}
                </td>
                {onetoeighteen.map((holeno) => (
                  <RoundRows
                    key={holeno}
                    shots={element["shots" + holeno]}
                    points={element["points" + holeno]}
                  />
                ))}
                <td className="cellcenter" style={styles.cell}>
                  {element.shots1 +
                    element.shots2 +
                    element.shots3 +
                    element.shots4 +
                    element.shots5 +
                    element.shots6 +
                    element.shots7 +
                    element.shots8 +
                    element.shots9 +
                    element.shots10 +
                    element.shots11 +
                    element.shots12 +
                    element.shots13 +
                    element.shots14 +
                    element.shots15 +
                    element.shots16 +
                    element.shots17 +
                    element.shots18 -
                    element.handicap}
                </td>
                <td className="cellcenter" style={styles.cell}>
                  {element.points1 +
                    element.points2 +
                    element.points3 +
                    element.points4 +
                    element.points5 +
                    element.points6 +
                    element.points7 +
                    element.points8 +
                    element.points9 +
                    element.points10 +
                    element.points11 +
                    element.points12 +
                    element.points13 +
                    element.points14 +
                    element.points15 +
                    element.points16 +
                    element.points17 +
                    element.points18}
                </td>
                <td className="cellcenter" style={styles.cell}>
                  {props.isAuthenticated ? (
                    <Button
                      className="remove-btn"
                      style={{ margin: "0px" }}
                      color="danger"
                      size="sm"
                      onClick={() => props.deleteRound(element._id)}
                    >
                      &times;
                    </Button>
                  ) : null}
                </td>
              </tr>
            </CSSTransition>
          ))}
        </tbody>
      </Table>

      <p className="rightjustify">Shots (Points)</p>
    </div>
  );
}

PrevRounds.propTypes = {
  getRounds: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  round: state.round,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getRounds, deleteRound, addRound })(
  PrevRounds
);
