import axios from "axios";
import { GET_ROUNDS, ADD_ROUND, DELETE_ROUND, ROUNDS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getRounds = () => (dispatch) => {
  dispatch(setRoundsLoading());
  axios
    .get("/api/rounds")
    .then((res) =>
      dispatch({
        type: GET_ROUNDS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteRound = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/rounds/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ROUND,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addRound = (round) => (dispatch, getState) => {
  axios
    .post("/api/rounds", round, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_ROUND,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setRoundsLoading = () => {
  return {
    type: ROUNDS_LOADING,
  };
};
