//Pete, the baker
//https://www.codewars.com/kata/525c65e51bf619685c000059/solutions/javascript

function cakes(recipe, available) {
    const possibleAmountOfCakes = []

    for (const [key, value] of Object.entries(recipe)) {
        const valueOfPossibleCakes = available[key] / value

        if(Number.isNaN(valueOfPossibleCakes)) {
            return 0
        }

        possibleAmountOfCakes.push(valueOfPossibleCakes)
    }

    return Math.floor(Math.min(...possibleAmountOfCakes))
}

