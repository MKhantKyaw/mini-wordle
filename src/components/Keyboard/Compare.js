export function compare(origin, inputArr) {
    const newArr = []
    for (let i = 0; i < origin.length; i++) {
        if (origin[i].toLowerCase() === inputArr[i].toLowerCase()) {
            newArr.push("correct")
        }
        else if (origin.includes(inputArr[i].toLowerCase())) {
            newArr.push("placement")
        }
        else newArr.push("wrong")
    }
    return newArr

}