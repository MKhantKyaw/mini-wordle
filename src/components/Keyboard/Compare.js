export function compare(originArr, inputArr) {
    let origin = originArr.slice()
    origin[0].toLowerCase()
    let newArr = ["", "", "", "", ""]
    let leftArr = []
    for (let i = 0; i < origin.length; i++) {
        if (origin[i].toLowerCase() === inputArr[i].toLowerCase()) {
            newArr[i] = "correct"
            origin[i] = ""
        }
        else {
            leftArr.push(i)
        }
    }

    if (leftArr) {
        leftArr.forEach(i => {
            const correctPos = origin.indexOf(inputArr[i].toLowerCase())
            console.log("origin", origin, "input", inputArr[i], correctPos)
            // console.log(correctPos, i, inputArr[i].toLowerCase())
            if (origin.includes(inputArr[i].toLowerCase()) && correctPos !== i) {
                // console.log("correctPos", correctPos)
                newArr[i] = "placement"
                origin[correctPos] = ""
            }
            else {
                newArr[i] = "wrong"
                origin[i] = ""
            }
        });
    }
    return newArr

}