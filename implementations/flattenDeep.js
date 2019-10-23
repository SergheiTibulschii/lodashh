const flattenDeep = arr => {
    const result =  arr.reduce((acc, element) => Array.isArray(element) ? [...acc, ...element] : [...acc, element], [])

    return result.some(x => Array.isArray(x)) ? flattenDeep(result) : result
}


export default flattenDeep