const compact = arr => {
    if(!Array.isArray(arr)) throw new Error('First argument must be an array');
    return arr.filter(element => element)
}
export default compact;
