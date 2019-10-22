const differenceWith = (arr, values, comparator) => {
    return arr.reduce((acc, element) => {
        if(!values.some(value => comparator(element, value))) acc.push(element)
        return acc;
    }, [])
}

export default differenceWith