//Simple Pig Latin
//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

const punctuationRegExp = /[^\w\s]+/g;

const formatWord = (word) => {
    const punctuationMark = word.match(punctuationRegExp)?.at(-1)
    const wordAsArray = word.split("")
    const firstChar = wordAsArray.shift()

    if(word.length === 1 && punctuationMark) return word

    if(punctuationMark) {
        return wordAsArray.join("").replace(punctuationMark, firstChar + "ay")
    }

    wordAsArray.push(firstChar + "ay")
    return wordAsArray.join("")
}

function pigIt(str){
    return str.split(" ").map((word)=> formatWord(word)).join(" ")
}

