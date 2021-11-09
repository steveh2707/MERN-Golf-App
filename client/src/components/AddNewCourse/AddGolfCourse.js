import { addCourse } from "../../actions/courseActions";
import React, { useState } from "react";
import EachHoleInput from "./EachHoleInput";
import { connect } from "react-redux";
import arraySummer from "../tools/arraySummer";
import ExtraRowsInput from "./ExtraRowsInput";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function AddGolfCourse(props) {
  function onSubmit(e) {
    e.preventDefault();
    const newCourse = {
      courseName: courseName,
      coursePar: coursePar,
      slopeRatingYellow: slopeRatingYellow,
      holes: {
        1: {
          name: hole1name,
          yellowYds: hole1YellowYds,
          par: hole1par,
          SI: hole1SI,
        },
        2: {
          name: hole2name,
          yellowYds: hole2YellowYds,
          par: hole2par,
          SI: hole2SI,
        },
        3: {
          name: hole3name,
          yellowYds: hole3YellowYds,
          par: hole3par,
          SI: hole3SI,
        },
        4: {
          name: hole4name,
          yellowYds: hole4YellowYds,
          par: hole4par,
          SI: hole4SI,
        },
        5: {
          name: hole5name,
          yellowYds: hole5YellowYds,
          par: hole5par,
          SI: hole5SI,
        },
        6: {
          name: hole6name,
          yellowYds: hole6YellowYds,
          par: hole6par,
          SI: hole6SI,
        },
        7: {
          name: hole7name,
          yellowYds: hole7YellowYds,
          par: hole7par,
          SI: hole7SI,
        },
        8: {
          name: hole8name,
          yellowYds: hole8YellowYds,
          par: hole8par,
          SI: hole8SI,
        },
        9: {
          name: hole9name,
          yellowYds: hole9YellowYds,
          par: hole9par,
          SI: hole9SI,
        },
        10: {
          name: hole10name,
          yellowYds: hole10YellowYds,
          par: hole10par,
          SI: hole10SI,
        },
        11: {
          name: hole11name,
          yellowYds: hole11YellowYds,
          par: hole11par,
          SI: hole11SI,
        },
        12: {
          name: hole12name,
          yellowYds: hole12YellowYds,
          par: hole12par,
          SI: hole12SI,
        },
        13: {
          name: hole13name,
          yellowYds: hole13YellowYds,
          par: hole13par,
          SI: hole13SI,
        },
        14: {
          name: hole14name,
          yellowYds: hole14YellowYds,
          par: hole14par,
          SI: hole14SI,
        },
        15: {
          name: hole15name,
          yellowYds: hole15YellowYds,
          par: hole15par,
          SI: hole15SI,
        },
        16: {
          name: hole16name,
          yellowYds: hole16YellowYds,
          par: hole16par,
          SI: hole16SI,
        },
        17: {
          name: hole17name,
          yellowYds: hole17YellowYds,
          par: hole17par,
          SI: hole17SI,
        },
        18: {
          name: hole18name,
          yellowYds: hole18YellowYds,
          par: hole18par,
          SI: hole18SI,
        },
      },
    };
    console.log(newCourse);
    props.addCourse(newCourse);
    setModal(!modal);
  }

  const [modal, setModal] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [slopeRatingYellow, setSlopeRatingYellow] = useState("");
  const [hole1name, setHole1name] = useState("");
  const [hole1YellowYds, setHole1YellowYds] = useState("");
  const [hole1par, setHole1par] = useState("");
  const [hole1SI, setHole1SI] = useState("");
  const [hole2name, setHole2name] = useState("");
  const [hole2YellowYds, setHole2YellowYds] = useState("");
  const [hole2par, setHole2par] = useState("");
  const [hole2SI, setHole2SI] = useState("");
  const [hole3name, setHole3name] = useState("");
  const [hole3YellowYds, setHole3YellowYds] = useState("");
  const [hole3par, setHole3par] = useState("");
  const [hole3SI, setHole3SI] = useState("");
  const [hole4name, setHole4name] = useState("");
  const [hole4YellowYds, setHole4YellowYds] = useState("");
  const [hole4par, setHole4par] = useState("");
  const [hole4SI, setHole4SI] = useState("");
  const [hole5name, setHole5name] = useState("");
  const [hole5YellowYds, setHole5YellowYds] = useState("");
  const [hole5par, setHole5par] = useState("");
  const [hole5SI, setHole5SI] = useState("");
  const [hole6name, setHole6name] = useState("");
  const [hole6YellowYds, setHole6YellowYds] = useState("");
  const [hole6par, setHole6par] = useState("");
  const [hole6SI, setHole6SI] = useState("");
  const [hole7name, setHole7name] = useState("");
  const [hole7YellowYds, setHole7YellowYds] = useState("");
  const [hole7par, setHole7par] = useState("");
  const [hole7SI, setHole7SI] = useState("");
  const [hole8name, setHole8name] = useState("");
  const [hole8YellowYds, setHole8YellowYds] = useState("");
  const [hole8par, setHole8par] = useState("");
  const [hole8SI, setHole8SI] = useState("");
  const [hole9name, setHole9name] = useState("");
  const [hole9YellowYds, setHole9YellowYds] = useState("");
  const [hole9par, setHole9par] = useState("");
  const [hole9SI, setHole9SI] = useState("");
  const [hole10name, setHole10name] = useState("");
  const [hole10YellowYds, setHole10YellowYds] = useState("");
  const [hole10par, setHole10par] = useState("");
  const [hole10SI, setHole10SI] = useState("");
  const [hole11name, setHole11name] = useState("");
  const [hole11YellowYds, setHole11YellowYds] = useState("");
  const [hole11par, setHole11par] = useState("");
  const [hole11SI, setHole11SI] = useState("");
  const [hole12name, setHole12name] = useState("");
  const [hole12YellowYds, setHole12YellowYds] = useState("");
  const [hole12par, setHole12par] = useState("");
  const [hole12SI, setHole12SI] = useState("");
  const [hole13name, setHole13name] = useState("");
  const [hole13YellowYds, setHole13YellowYds] = useState("");
  const [hole13par, setHole13par] = useState("");
  const [hole13SI, setHole13SI] = useState("");
  const [hole14name, setHole14name] = useState("");
  const [hole14YellowYds, setHole14YellowYds] = useState("");
  const [hole14par, setHole14par] = useState("");
  const [hole14SI, setHole14SI] = useState("");
  const [hole15name, setHole15name] = useState("");
  const [hole15YellowYds, setHole15YellowYds] = useState("");
  const [hole15par, setHole15par] = useState("");
  const [hole15SI, setHole15SI] = useState("");
  const [hole16name, setHole16name] = useState("");
  const [hole16YellowYds, setHole16YellowYds] = useState("");
  const [hole16par, setHole16par] = useState("");
  const [hole16SI, setHole16SI] = useState("");
  const [hole17name, setHole17name] = useState("");
  const [hole17YellowYds, setHole17YellowYds] = useState("");
  const [hole17par, setHole17par] = useState("");
  const [hole17SI, setHole17SI] = useState("");
  const [hole18name, setHole18name] = useState("");
  const [hole18YellowYds, setHole18YellowYds] = useState("");
  const [hole18par, setHole18par] = useState("");
  const [hole18SI, setHole18SI] = useState("");

  let onetoeighteen = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  //create arrays of state and setstate

  let allNames = [
    hole1name,
    hole2name,
    hole3name,
    hole4name,
    hole5name,
    hole6name,
    hole7name,
    hole8name,
    hole9name,
    hole10name,
    hole11name,
    hole12name,
    hole13name,
    hole14name,
    hole15name,
    hole16name,
    hole17name,
    hole18name,
  ];

  let allSetNames = [
    setHole1name,
    setHole2name,
    setHole3name,
    setHole4name,
    setHole5name,
    setHole6name,
    setHole7name,
    setHole8name,
    setHole9name,
    setHole10name,
    setHole11name,
    setHole12name,
    setHole13name,
    setHole14name,
    setHole15name,
    setHole16name,
    setHole17name,
    setHole18name,
  ];

  let allYellowYds = [
    hole1YellowYds,
    hole2YellowYds,
    hole3YellowYds,
    hole4YellowYds,
    hole5YellowYds,
    hole6YellowYds,
    hole7YellowYds,
    hole8YellowYds,
    hole9YellowYds,
    hole10YellowYds,
    hole11YellowYds,
    hole12YellowYds,
    hole13YellowYds,
    hole14YellowYds,
    hole15YellowYds,
    hole16YellowYds,
    hole17YellowYds,
    hole18YellowYds,
  ];

  let allSetYellowYds = [
    setHole1YellowYds,
    setHole2YellowYds,
    setHole3YellowYds,
    setHole4YellowYds,
    setHole5YellowYds,
    setHole6YellowYds,
    setHole7YellowYds,
    setHole8YellowYds,
    setHole9YellowYds,
    setHole10YellowYds,
    setHole11YellowYds,
    setHole12YellowYds,
    setHole13YellowYds,
    setHole14YellowYds,
    setHole15YellowYds,
    setHole16YellowYds,
    setHole17YellowYds,
    setHole18YellowYds,
  ];

  let allPars = [
    hole1par,
    hole2par,
    hole3par,
    hole4par,
    hole5par,
    hole6par,
    hole7par,
    hole8par,
    hole9par,
    hole10par,
    hole11par,
    hole12par,
    hole13par,
    hole14par,
    hole15par,
    hole16par,
    hole17par,
    hole18par,
  ];

  let allSetPars = [
    setHole1par,
    setHole2par,
    setHole3par,
    setHole4par,
    setHole5par,
    setHole6par,
    setHole7par,
    setHole8par,
    setHole9par,
    setHole10par,
    setHole11par,
    setHole12par,
    setHole13par,
    setHole14par,
    setHole15par,
    setHole16par,
    setHole17par,
    setHole18par,
  ];

  let allSIs = [
    hole1SI,
    hole2SI,
    hole3SI,
    hole4SI,
    hole5SI,
    hole6SI,
    hole7SI,
    hole8SI,
    hole9SI,
    hole10SI,
    hole11SI,
    hole12SI,
    hole13SI,
    hole14SI,
    hole15SI,
    hole16SI,
    hole17SI,
    hole18SI,
  ];

  let allSetSIs = [
    setHole1SI,
    setHole2SI,
    setHole3SI,
    setHole4SI,
    setHole5SI,
    setHole6SI,
    setHole7SI,
    setHole8SI,
    setHole9SI,
    setHole10SI,
    setHole11SI,
    setHole12SI,
    setHole13SI,
    setHole14SI,
    setHole15SI,
    setHole16SI,
    setHole17SI,
    setHole18SI,
  ];

  let coursePar = arraySummer(allPars.slice(0, 18));

  return (
    <div className="center">
      <Button color="dark" onClick={() => setModal(!modal)}>
        Add New Course
      </Button>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Add A New Course
        </ModalHeader>

        <ModalBody>
          <form onSubmit={onSubmit}>
            <div className="centerModal">
              <div className="row">
                <p className="topLeft">Course</p>
                <input
                  style={{ width: "365px" }}
                  className="playerName"
                  value={courseName}
                  placeholder="Enter Course Name"
                  type="text"
                  onChange={(event) => setCourseName(event.target.value)}
                />
              </div>

              <div className="row">
                <p className="holeNo">Hole</p>
                <p className="holeNameTitle">Name</p>
                <p className="parSI">Yds</p>
                <p className="scoreInput">Par</p>
                <p className="parSI">SI</p>
              </div>

              {onetoeighteen.slice(0, 9).map((holeno) => (
                <EachHoleInput
                  key={holeno}
                  hole={holeno}
                  holeNameState={allNames[holeno - 1]}
                  setName={allSetNames[holeno - 1]}
                  holeYdsState={allYellowYds[holeno - 1]}
                  setYards={allSetYellowYds[holeno - 1]}
                  par={allPars[holeno - 1]}
                  setPar={allSetPars[holeno - 1]}
                  SI={allSIs[holeno - 1]}
                  setSI={allSetSIs[holeno - 1]}
                />
              ))}

              <ExtraRowsInput
                text={"IN"}
                yellowYds={arraySummer(allYellowYds.slice(0, 9))}
                par={arraySummer(allPars.slice(0, 9))}
                shots={""}
                points={""}
              />

              {onetoeighteen.slice(9, 18).map((holeno) => (
                <EachHoleInput
                  key={holeno}
                  hole={holeno}
                  holeNameState={allNames[holeno - 1]}
                  setName={allSetNames[holeno - 1]}
                  holeYdsState={allYellowYds[holeno - 1]}
                  setYards={allSetYellowYds[holeno - 1]}
                  par={allPars[holeno - 1]}
                  setPar={allSetPars[holeno - 1]}
                  SI={allSIs[holeno - 1]}
                  setSI={allSetSIs[holeno - 1]}
                />
              ))}

              <ExtraRowsInput
                text={"OUT"}
                yellowYds={arraySummer(allYellowYds.slice(9, 18))}
                par={arraySummer(allPars.slice(9, 18))}
                shots={""}
                points={""}
              />

              <ExtraRowsInput
                text={"TOTAL"}
                yellowYds={arraySummer(allYellowYds.slice(0, 18))}
                par={arraySummer(allPars.slice(0, 18))}
                shots={""}
                points={""}
              />

              <div className="row">
                <p className="holeNo"></p>
                <p className="holeTotals">SLOPE RATING</p>
                <input
                  className="yellowYds"
                  value={slopeRatingYellow}
                  placeholder="SR"
                  type="number"
                  onChange={(event) => setSlopeRatingYellow(event.target.value)}
                />
                <p className="parSI"></p>
                <p className="parSI"></p>
              </div>

              <br />
              <div className="rightjustify">
                <Button color="secondary">Submit</Button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps, { addCourse })(AddGolfCourse);
