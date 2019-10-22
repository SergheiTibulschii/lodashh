const differenceBy = (arr, values, func) => {
    return arr.reduce((acc, element) => {
        if(typeof func === 'function' && !values.map(func).includes(func(element))) acc.push(element)
        else if (typeof func === 'string' && !values.map(v => v[func]).includes(element[func])) acc.push(element)
        return acc;
    }, [])
}

export default differenceBy