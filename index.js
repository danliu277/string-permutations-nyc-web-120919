const findAllPermutations = (str) => {
    if (str.length < 2)
        return [str]

    let result = []

    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (str.indexOf(char) != i)
            continue

        let remaining = str.slice(0, i) + str.slice(i + 1, str.length)
        let permutations = findAllPermutations(remaining)
        
        permutations.forEach(x => {
            result.push(char + x)
        })
    }
    return result
}