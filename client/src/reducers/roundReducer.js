
import { GET_ROUNDS, ADD_ROUND, DELETE_ROUND, ROUNDS_LOADING } from "../actions/types"

const initialState = {
    rounds: [],
    loading: false
}

        // {
        //     id: uuidv4(),
        //     playerA: "Stephen",
        //     course: "Temple Golf Club",
        //     date: "",
        //     handicap: 20,
        //     shots1: 4,
        //     shots2: 5,
        //     shots3: 5,
        //     shots4: 5,
        //     shots5: 4,
        //     shots6: 5,
        //     shots7: 4,
        //     shots8: 5,
        //     shots9: 6,
        //     shots10: 5,
        //     shots11: 4,
        //     shots12: 5,
        //     shots13: 6,
        //     shots14: 3,
        //     shots15: 4,
        //     shots16: 4,
        //     shots17: 5,
        //     shots18: 5,
        // }

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ROUNDS:
            return {
                ...state,
                rounds: action.payload,
                loading: false
            }
        case DELETE_ROUND:
            return {
                ...state,
                rounds: state.rounds.filter(round => round._id !== action.payload)
            }
        case ADD_ROUND:
            return {
                ...state,
                rounds: [action.payload, ...state.rounds]
            }
        case ROUNDS_LOADING:
            return {
                ...state, 
                loading: true
            }
        default:
            return state
    }
}