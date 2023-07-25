//String incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
    const num = strng.match(/\d+$/) ? +strng.match(/\d+$/)[0] : NaN;

    if (isNaN(num) || !strng.endsWith(num.toString())) {
        return strng + 1;
    }

    const zeros = Math.max(0, num.toString().length - 1);

    let numToTheEnd = (num + 1).toString();

    if (zeros !== 0) {
        numToTheEnd = "0".repeat(zeros) + numToTheEnd;
    }

    return strng.replace(new RegExp(num + '$'), numToTheEnd);
}
