function getDividers(num) {
    const dividers = [];

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) dividers.push(i)
    }

    return dividers;
}


const getCombinations = ([item, ...array], n) => {
    if (!array.length) return [Array(n).fill(item)];

    const result = [];
    let m = n;

    do {
        const left = Array(m).fill(item);
        result.push(...getCombinations(array, n - m)
            .map(right => [...left, ...right])
        );
    } while (m--);

    return result;
}

const getResultCount = (arr, value) => {
    return  arr.reduce((count, innerArray) => {
        const res = innerArray.reduce((acc, num) => acc * num, 1)

        return res === value ? count + 1 : count
    }, 0)
}

const multiply = (n , k) => {
    const dividers = getDividers(n)

    const allCombinations = getCombinations(dividers, k)

    return getResultCount(allCombinations,  n)
}
