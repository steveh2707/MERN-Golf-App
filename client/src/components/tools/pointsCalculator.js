function pointsCalculator(handicap, shots, par, SI) {
    let nrshots = Math.floor(handicap / 18)
    if (handicap % 18 >= SI && SI > 0) {
        nrshots += 1;
    }

    let tempPoints = par - shots + nrshots +2
    let nrPoints = 0

    tempPoints<0 ? nrPoints = 0 : nrPoints = tempPoints

    if (shots > 0 && par > 0) {
        return nrPoints
    }
}

export default pointsCalculator