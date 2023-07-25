//String incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
    const num = strng.match(/\d+/g)?.at(-1)

    if (!num || !strng.endsWith(num)) return strng + 1

    const zeros = num.length - Number(num).toString().length

    let numToTheEnd = (+num + 1).toString()

    if (zeros !== 0) {
        numToTheEnd = new Array(num.length - (Number(num) + 1).toString().length).fill(0).join("") + numToTheEnd
    }

    return strng.replace(new RegExp(num + '$') , numToTheEnd)
}
