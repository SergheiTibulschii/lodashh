const flatten = arr =>
    arr.reduce(
        (acc, element) => Array.isArray(element) ? [...acc, ...element] : [...acc, element],
        []
    )

export default flatten