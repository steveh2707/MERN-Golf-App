import axios from "axios"
import { GET_COURSES, ADD_COURSE, COURSES_LOADING } from "./types"

export const getCourses = () => dispatch => {
    dispatch(setCoursesLoading())
    axios
        .get("/api/courses")
        .then(res =>
            dispatch({
                type: GET_COURSES,
                payload: res.data
            }))
}

export const addCourse = course => dispatch => {
    axios
        .post('/api/courses', course)
        .then(res =>
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
        )
}

export const setCoursesLoading = () => {
    return {
        type: COURSES_LOADING
    }
}