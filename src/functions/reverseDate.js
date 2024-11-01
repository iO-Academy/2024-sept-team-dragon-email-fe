function reverseDate(inputDate) {
    let splitDate = inputDate.split(" ")[0]
    let array = splitDate.split("-")
    let newDate = `${array[2]}-${array[1]}-${array[0]}`
    return newDate
}

export default reverseDate