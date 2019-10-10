const chunk = (arr = [], size = 1) => {
    if(!Array.isArray(arr)) throw new Error('First argument must be an array');
    if(!Number.isInteger(Number(size))) throw new Error('Chunk size must be an integer')

    return arr.reduce((result, element) => {
        if(result.length) {
            const last = result[result.length - 1]
            if(last.length < size) {
                last.push(element)
            } else {
                result.push([element])
            }
        } else {
            result.push([element])
        }
        return result;
    }, [])
}
export default chunk;