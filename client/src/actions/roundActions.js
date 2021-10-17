import axios from "axios"
import { GET_ROUNDS, ADD_ROUND, DELETE_ROUND, ROUNDS_LOADING } from "./types"

export const getRounds = () => dispatch => {
    dispatch(setRoundsLoading())
    axios
        .get("/api/rounds")
        .then(res =>
            dispatch({
                type: GET_ROUNDS,
                payload: res.data
            }))
}


export const deleteRound = id => dispatch => {
    axios
        .delete(`/api/rounds/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ROUND,
                payload: id
            })
        )
}


export const addRound = round => dispatch => {
    axios
        .post('/api/rounds', round)
        .then(res =>
            dispatch({
                type: ADD_ROUND,
                payload: res.data
            })
        )
}

export const setRoundsLoading = () => {
    return {
        type: ROUNDS_LOADING
    }
}