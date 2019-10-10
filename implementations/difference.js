const difference = (arr, ...arrs) => {
    return arr.reduce((result, element) => {
        if(!arrs.some(x => x.includes(element))) result.push(element)
        return result;
    }, [])
}

export default difference;
