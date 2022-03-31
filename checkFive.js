function checkFive(value) {
    if (value === Number(value)) {
        if (value > 5) {
            return `${value} is greater than 5.`
        } else if (value < 5) {
            return `${value} is less than 5.`
        } else {
            return `${value} is equal to 5.`
        }
    } else {
        throw new Error('Invalid number argument provided')
    }
}

module.exports = checkFive