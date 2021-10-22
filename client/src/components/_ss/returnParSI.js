import golfCourseData from "./reference/golfCourseData"

function returnParSI(selectedCourse, hole, required) {

    let courseNames = []
    for (let i = 0; i < golfCourseData.length; i++) {
        courseNames.push(golfCourseData[i].courseName)
    }

    let indexOfSelectedCourse = courseNames.indexOf(selectedCourse)
    let selectedCourseInfo = golfCourseData[indexOfSelectedCourse]

    if (indexOfSelectedCourse === -1) {
        return ""
    }

    if (required === "Par") {
        return selectedCourseInfo.holes[hole].par
    } else if (required === "SI") {
        return selectedCourseInfo.holes[hole].SI
    } else if (required === "Name") {
        return selectedCourseInfo.holes[hole].name
    } else if (required === "yellowYds") {
        return selectedCourseInfo.holes[hole].yellowYds
    } else { return "N/A" }

}

export default returnParSI