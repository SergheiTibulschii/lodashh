const dropRight = (arr, n = 1) => arr.slice(0, n === 0 ? undefined : -n)

export default dropRight