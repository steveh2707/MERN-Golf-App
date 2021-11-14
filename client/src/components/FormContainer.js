import React, { useState } from "react";
import AppNavBar from "./AppNavBar";
import FormComponent from "./FormComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import PrevRounds from "./PrevRounds";

function FormContainer() {
  const [SPV, setSPV] = useState(false);

  function toggleSwitch() {
    return (
      <div style={{ textAlign: "right", marginTop: "0px" }}>
        <Tooltip
          title={
            SPV
              ? "Click toggle to switch to multi page view"
              : "Click toggle to switch to single page view"
          }
        >
          <FormControlLabel
            label={""}
            control={
              <Switch
                checked={SPV}
                onChange={() => setSPV(!SPV)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
          />
        </Tooltip>
      </div>
    );
  }

  function singlePageView(SPV) {
    if (SPV) {
      return (
        <div style={{ minWidth: "1020px" }}>
          <AppNavBar SPV={SPV} />
          {toggleSwitch()}
          <FormComponent />
          <PrevRounds />
        </div>
      );
    } else if (!SPV) {
      return (
        <BrowserRouter>
          <div style={{ minWidth: "560px" }}>
            <AppNavBar SPV={SPV} />
            {toggleSwitch()}
            <Routes>
              <Route path="/" element={<FormComponent />} />
              <Route path="/PreviousRounds" element={<PrevRounds />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
    }
  }

  return (
    <div>
      <div>{singlePageView(SPV)}</div>
    </div>
  );
}

export default FormContainer;
