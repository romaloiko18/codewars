//Write Number in Expanded Form
//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

const generateSequenceOfZeros = (length) => new Array(length).fill(0).join("")

function expandedForm(num) {
    const parts = []
    const numAsCharArr = num.toString().split("")

    for (let i = 0; i < numAsCharArr.length; i++) {
        const thisChar = numAsCharArr[i]

        if (thisChar !== "0") {
            parts.push(`${thisChar}${generateSequenceOfZeros(numAsCharArr.length - i - 1)}`)
        }
    }

    return parts.join(" + ")
}
