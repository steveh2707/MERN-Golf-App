import React, { useState } from "react";
import AppNavBar from "./AppNavBar";
import FormComponent from "./FormComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

// import { Provider } from "react-redux";
// import store from "../store";
import PrevRounds from "./PrevRounds";

function FormContainer() {
  const [SPV, setSPV] = useState(false);

  function toggleSwitch() {
    return (
      <div style={{ textAlign: "right", marginTop: "0px" }}>
        <FormControlLabel
          label={
            SPV
              ? "Click toggle to switch to multi page view"
              : "Click toggle to switch to single page view"
          }
          control={
            <Switch
              checked={SPV}
              onChange={() => setSPV(!SPV)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
      </div>
    );
  }

  function singlePageView(SPV) {
    if (SPV) {
      return (
        <div>
          <AppNavBar SPV={SPV} />
          {toggleSwitch()}
          <FormComponent />
          <PrevRounds />
        </div>
      );
    } else if (!SPV) {
      return (
        <BrowserRouter>
          <AppNavBar SPV={SPV} />
          {toggleSwitch()}
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/PreviousRounds" element={<PrevRounds />} />
          </Routes>
        </BrowserRouter>
      );
    }
  }

  return (
    <div>
      {/* <Provider store={store}> */}
      <div style={{ minWidth: "1020px" }}>
        {/* <AppNavBar />
        <FormComponent />
        <PrevRounds /> */}
        {singlePageView(SPV)}
      </div>
      {/* </Provider> */}
    </div>
  );
}

export default FormContainer;
