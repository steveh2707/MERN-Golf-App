function arraySummer (array) {
    let arrayTotal = 0

    for (let i = 0; i<array.length; i++) {
        if (array[i]>0) arrayTotal += parseFloat(array[i])
    }
    
    if (arrayTotal === 0) {
        arrayTotal = ""
    }

    return arrayTotal

}

export default arraySummer